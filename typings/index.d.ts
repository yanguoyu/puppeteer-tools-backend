declare module 'egg' {
  // 扩展 app
  interface Application {
    passport: any;
    mysql: any;
  }
}