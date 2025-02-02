import { MatrixType } from "../types/MatrixType";

export const findNearestCells = (
  matrix: MatrixType,
  hoveredValue: number,
  X: number,
  cellId: string
) => {
  const allCells = matrix.flat();
  return allCells
    .map((cell) => ({ ...cell, diff: Math.abs(cell.amount - hoveredValue) }))
    .sort((a, b) => a.diff - b.diff)
    .filter((cell) => cell.id !== cellId)
    .slice(0, X)
    .map((cell) => cell.id);
};
