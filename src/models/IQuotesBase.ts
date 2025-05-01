import {IQuote} from "./IQuote.ts";

export interface IQuotesBase {
  total: number;
  skip: number;
  limit: number;
  quotes:IQuote[]
}