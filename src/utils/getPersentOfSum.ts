import { CellType } from "../types/CellType";

export const getPersentOfSum = (sum: number, cells: CellType[]) => {
  return cells.map((cell) => ((cell.amount / sum) * 100).toFixed(1));
};
