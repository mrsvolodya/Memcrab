import { CellType } from "../types/CellType";

export const getPersentOfSum = (sum: number, cell: CellType) => {
  return ((cell.amount / sum) * 100).toFixed(1);
};
