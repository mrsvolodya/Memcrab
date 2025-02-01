import { MatrixType } from "../types/MatrixType";

export const calculatePercentail = (matrix: MatrixType) => {
  if (!matrix.length) return;
  return matrix[0].map((_, i) => {
    const valueAmount =
      matrix.reduce((acc, subArr) => acc + subArr[i].amount, 0) / 2;
    return {
      id: i,
      amount: valueAmount,
    };
  });
};
