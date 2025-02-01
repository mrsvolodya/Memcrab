import { TableSizeType } from "../types/TableSizeType";

export const calcLimitForX = (range: TableSizeType) => {
  if (range.M && range.N) return range.M * range.N - 1;

  return 0;
};
