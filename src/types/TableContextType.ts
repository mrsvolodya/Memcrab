import { RangeType } from "./RangeType";

export type TableContextType = {
  range: RangeType;
  setRange: (v: RangeType | ((b: RangeType) => RangeType)) => void;
};
