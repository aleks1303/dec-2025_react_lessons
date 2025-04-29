import {IPost} from "./IPost.ts";

export type IPostModelType = {
  total: number;
  skip: number;
  limit: number;
  posts: IPost[]
}