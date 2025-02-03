import { createContext } from "react";
import { HighlightContextType } from "../types/HighlightContext.ts";

export const HighlightContext = createContext<HighlightContextType>({ 
  isPersent: { id: null, isActive: false }, 
  highlightedCells: [],
  handleMouseEnter: () => {},
  handleMouseLeave: () => {}
});
