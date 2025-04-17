import {ICart} from "./ICart.ts";

export interface ICartGeneral {
    total: number;
    skip: number;
    limit: number;
    carts: ICart[]
}