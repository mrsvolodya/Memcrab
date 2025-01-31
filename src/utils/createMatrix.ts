import { RangeType } from "../types/RangeType";

export const createMatrix = (range: RangeType) => {
  let counter = 0;
  return Array.from({ length: range.M }, (_, rowIndex) => {
    return Array.from({ length: range.N }, (_, cellIndex) => {
      const randomNumber = Math.floor(Math.random() * 100 + 100);
      return {
        id: `${rowIndex}_${cellIndex}_${counter++}`,
        amount: randomNumber,
      };
    });
  });
};
