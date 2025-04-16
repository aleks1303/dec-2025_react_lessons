import {ICoordinatesDummy} from "./ICoordinatesDummy.ts";

export interface IAddressDummy {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinatesDummy;
    country: string;
}