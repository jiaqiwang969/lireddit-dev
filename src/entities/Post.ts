import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() }) // hook
  // 作用每次update的时候创建新的date
  updatedAt = new Date();

  @Field()
  @Property({ type: "text" }) // 装饰器
  title!: string;
}
