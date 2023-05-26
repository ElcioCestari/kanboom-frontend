import {Column} from "../column/column";

export class Board {
  _id!: string;
  userId!: string;
  name!: string;
  columns!: Column[];
}
