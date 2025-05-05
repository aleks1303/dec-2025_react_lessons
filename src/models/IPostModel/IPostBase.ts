import {IPost} from "./IPost.ts";

export interface IPostsBase {
    total: number;
    skip: number;
    limit: number;
    posts: IPost[];
}