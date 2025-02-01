import { TableSizeType } from "../types/TableSizeType";
import { generateRandomNumb } from "./generateRundomNum";

export const createMatrix = (range: TableSizeType, startRow = 0) => {
  let counter = 0;
  return Array.from({ length: range.M }, (_, rowIndex) => {
    return Array.from({ length: range.N }, (_, cellIndex) => {
      const isStartRow = startRow ? startRow : rowIndex;
      return {
        id: `${isStartRow}_${cellIndex}_${counter++}`,
        amount: generateRandomNumb(),
      };
    });
  });
};
