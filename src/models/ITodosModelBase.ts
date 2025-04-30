import {ITodos} from "./ITodos.ts";

export interface ITodosModelBase {
  total: number;
  skip: number;
  limit: number;
  todos:ITodos[]
}