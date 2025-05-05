import {IUser} from "./IUser.ts";

export interface IUserBase {
  total: number;
  skip: number;
  limit: number;
  users: IUser[];
}