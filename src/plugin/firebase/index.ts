// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
// import type { Firebase } from "./interface";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // interface Firebase {
// //   ga: Analytics,
// //   db: Database 
// // }
// // export type { Firebase };
// const firebaseConfig = {
//   apiKey: "AIzaSyAtdlR7rCoTo8FmqNj7VvoIJp_f6g9deKA",
//   authDomain: "shopping-app-ff193.firebaseapp.com",
//   projectId: "shopping-app-ff193",
//   storageBucket: "shopping-app-ff193.appspot.com",
//   messagingSenderId: "707753472537",
//   appId: "1:707753472537:web:bfc2830249fa081f333088",
//   measurementId: "G-JEKKE46LTV",
//   databaseURL: "https://shopping-app-ff193-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // 應該是GA
// console.log("aa", analytics);

// const database = getDatabase(app);

// const $firebase: Firebase = {
//   ga: analytics,
//   db: database, // .ref()、.on()、.set()、.push()
// };

// export default $firebase;