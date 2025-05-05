import {IQuote} from "./IQuotes.ts";

export interface IQuotesBase {
  total: number;
  skip: number;
  limit: number;
  quotes: IQuote[];
}