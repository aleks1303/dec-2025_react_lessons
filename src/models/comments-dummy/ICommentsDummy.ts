import {IUserDummy} from "./IUserDummy.ts";

export interface ICommentsDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUserDummy;
}