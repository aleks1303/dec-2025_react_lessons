import {IComment} from "./IComment.ts";

export interface ICommentBase {
  total: number;
  skip: number;
  limit: number;
  comments: IComment[]
}