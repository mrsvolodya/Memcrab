import { RangeType } from "../types/RangeType";

export const calcLimitForX = (range: RangeType) => {
  if (range.M && range.N) return range.M * range.N - 1;

  return 0;
};
