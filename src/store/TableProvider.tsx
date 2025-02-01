import { useCallback, useEffect, useMemo, useState } from "react";
import { TableProviderType } from "../types/TableProviderType";
import { TableContext } from "./TableContext";
import { RangeType } from "../types/RangeType";
import { DEFAULT_RANGE } from "../constants/DEFAULT_RANGE.ts";
import { createMatrix } from "../utils/createMatrix.ts";
import { MatrixType } from "../types/MatrixType.ts";

export const TableProvider = ({ children }: TableProviderType) => {
  const [range, setRange] = useState<RangeType>(DEFAULT_RANGE);
  const [matrix, setMatrix] = useState<MatrixType>(() =>
    createMatrix(DEFAULT_RANGE)
  );

  useEffect(() => {
    setMatrix(() => createMatrix(range));
  }, [range]);

  const handleIncreaseOnClick = useCallback((rowId: number, cellId: string) => {
    setMatrix((prevMatrix) =>
      prevMatrix.map((row, i) =>
        i === rowId
          ? row.map((cell) =>
              cell.id === cellId ? { ...cell, amount: cell.amount + 1 } : cell
            )
          : row
      )
    );
  }, []);

  const handleDeleteRow = useCallback((rowId: number) => {
    setMatrix((prevMatrix) => {
      return prevMatrix.filter((_, index) => rowId !== index);
    });
  }, []);

  const values = useMemo(
    () => ({
      range,
      matrix,
      setRange,
      handleDeleteRow,
      handleIncreaseOnClick,
    }),
    [range, matrix, handleIncreaseOnClick, handleDeleteRow]
  );
  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};
