import {IHairDummy} from "./IHairDummy.ts";
import {IAddressDummy} from "./IAddressDummy.ts";
import {IBankDummy} from "./IBankDummy.ts";
import {ICompanyDummy} from "./ICompanyDummy.ts";
import {ICryptoDummy} from "./ICryptoDummy.ts";


export interface IUsersDummy {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHairDummy;
  ip: string;
  address: IAddressDummy;
  macAddress: string;
  university: string;
  bank: IBankDummy;
  company: ICompanyDummy;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: ICryptoDummy;
  role: string;
}