import { createContext } from "react";
import { MatrixContextType } from "../types/MatrixContextType";

export const MatrixContext = createContext<MatrixContextType | null>(null);
