import {IUser} from "./IUser.ts";


export interface IUserGeneral {
  total: number;
  skip: number;
  limit: number;
  users: IUser[]
}