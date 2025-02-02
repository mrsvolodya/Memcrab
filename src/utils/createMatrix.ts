import { TableSizeType } from "../types/TableSizeType";
import { generateRandomNumb } from "./generateRundomNum";

export const createMatrix = (range: TableSizeType, startRow = 0) => {
  let counter = 0;

  return Array.from({ length: range.M }, (_, rowIndex) => {
    const rowId = startRow + rowIndex;

    return Array.from({ length: range.N }, (_, cellIndex) => ({
      id: `${rowId}_${cellIndex}_${counter++}`,
      amount: generateRandomNumb(),
    }));
  });
};
