import {IGeoJs} from "./IGeoJs.ts";

export interface IAddressJs {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeoJs;
}