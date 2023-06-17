import { ref, getCurrentInstance } from "vue";
import * as dbFn from "firebase/database";
import { message } from "ant-design-vue";

export default () => {
  const { proxy } = getCurrentInstance()!;
  const db = proxy!.$firebase.db;

  const msgDB = dbFn.ref(db, "message");
  const msgData = ref({} as Record<string, any>);

  // 監聽 member 資料
  dbFn.onValue(msgDB, (snapshot) => {
    if (snapshot.val() !== null) {
      msgData.value = snapshot.val();
    } else {
      message.error("監聽失敗");
    }
  });

  // 加入訊息
  const PushMessage = (msgContent: string) => {
    dbFn.push(msgDB, msgContent)
      .then(() => {
        message.success("成功送出");
      })
      .catch((err) => { message.error(`送出失敗${err}`); });
    console.log();
  };

  // 刪除訊息
  const RemoveMessage = (id: string) => {
    if (!id) {
      message.error("請選擇 ID");
    }
    const msgItem = dbFn.ref(db, `message/${id}`);
    dbFn.remove(msgItem)
      .then(() => {
        message.success("刪除成功");
      })
      .catch((err) => {
        message.error(`刪除失敗${err}`);
      });
  };

  return {
    PushMessage,
    RemoveMessage,
    msgData
  };
};
