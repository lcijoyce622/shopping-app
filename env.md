检查process.cwd()路径下.env.development.local、.env.development、.env.local、.env这四个环境文件。
输出NODE_ENV和VITE_开头的键值对。
VITE_开头的键值对后面的不会覆盖前面的。
NODE_ENV的值后面的会覆盖前面的。