import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
//import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";

// 使用异步思想https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await
const main = async () => {
  // 等待承诺完成
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up(); // 类似git，记录历史table

  const app = express();

  app.get("/", (_, res) => {
    res.send("hello!");
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
