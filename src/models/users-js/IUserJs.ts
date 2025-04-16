import {IAddressJs} from "./IAddressJs.ts";
import {ICompanyJs} from "./IComponyJs.ts";


export interface IUserJs {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressJs;
  phone: string;
  website: string;
  company: ICompanyJs;
}