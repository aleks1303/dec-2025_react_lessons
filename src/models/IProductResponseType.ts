import {IProduct} from "./IProduct.ts";

export type IProductResponseType = {
    total: number,
    skip: number,
    limit: number,
    products: IProduct[],

}