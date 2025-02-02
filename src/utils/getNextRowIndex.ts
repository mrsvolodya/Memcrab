import { MatrixType } from "../types/MatrixType";

export const getNextRowIndex = (matrix: MatrixType) => {
  return Math.max(...matrix.map((cells) => +cells[0].id.split("_")[0])) + 1;
};
