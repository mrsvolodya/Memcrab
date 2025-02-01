import { AxisKey } from "../enums/AxisKey";
import { AxisType } from "../types/AxisType";
import { RangeType } from "../types/RangeType";

export const convertAxisToName = (axis: AxisType, range: RangeType) => {
  if (range[AxisKey.M] === 1 && AxisKey.M === axis) {
    return "row";
  }

  if (AxisKey.M === axis) {
    return "rows";
  }

  if (range[AxisKey.N] === 1 && AxisKey.N === axis) {
    return "cell";
  }

  if (AxisKey.X === axis) {
    return "nearest count";
  }

  return "cells";
};
