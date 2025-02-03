import { MatrixType } from "./MatrixType";

export type MatrixContextType = {
  matrix: MatrixType;
  setMatrix: React.Dispatch<React.SetStateAction<MatrixType>>;
};
