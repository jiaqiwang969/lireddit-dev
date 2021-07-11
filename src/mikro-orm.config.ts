import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

//console.log("dirname: ", __dirname); //打印信息
export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path
    pattern: /^[\w-]+\d+\.[tj]s$/, // ts or js file
  },
  entities: [Post], // database table
  dbName: "lireddit", // databse name
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
