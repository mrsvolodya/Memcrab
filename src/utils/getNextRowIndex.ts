import { MatrixType } from "../types/MatrixType";

export const getNextRowIndex  = (matrix: MatrixType) =>
  Math.max(...matrix.map((cells) => +cells[0].id.split("_")[0])) + 1;
