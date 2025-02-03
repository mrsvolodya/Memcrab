import { PersentType } from "./PersentType";

export type HighlightContextType = {
  isPersent: PersentType;
  highlightedCells: string[];
  handleMouseEnter: (value: number, cellId: string, rowId: number) => void;
  handleMouseLeave: () => void;
};
