/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from "react";
import { TableProviderType } from "../types/TableProviderType";
import { TableContext } from "./TableContext";
import { TableSizeType } from "../types/TableSizeType.ts";
import { DEFAULT_RANGE } from "../constants/DEFAULT_RANGE.ts";
import { createMatrix } from "../utils/createMatrix.ts";
import { MatrixType } from "../types/MatrixType.ts";
import { findNearestCells } from "../utils/findNearestCells.ts";
import { calcLimitForX } from "../utils/calcLimitForX.ts";

export const TableProvider = ({ children }: TableProviderType) => {
  const [tableSize, setTableSize] = useState<TableSizeType>(DEFAULT_RANGE);
  const [highlightCount, sethighlightCount] = useState(() =>
    calcLimitForX(tableSize)
  );
  const [highlightedCells, setHighlightedCells] = useState<string[]>([]);
  const [matrix, setMatrix] = useState<MatrixType>(() =>
    createMatrix(DEFAULT_RANGE)
  );
  useEffect(() => {
    setMatrix(() => createMatrix(tableSize));
  }, [tableSize]);

  const increaseCellValue = useCallback((rowId: number, cellId: string) => {
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

  const deleteRow = useCallback((rowId: number) => {
    setMatrix((prevMatrix) => {
      return prevMatrix.filter((_, index) => rowId !== index);
    });
  }, []);

  const addRow = () => {
    setMatrix((prevMatrix) => {
      const addOneRow = {
        M: 1,
        N: tableSize.N,
      };

      return [...prevMatrix, ...createMatrix(addOneRow, prevMatrix.length)];
    });
  };

  const handleMouseEnter = (value: number, cellId: string = "") => {
    if (!cellId) return setHighlightedCells([]);
    setHighlightedCells(findNearestCells(matrix, value, highlightCount));
  };

  const handleMouseLeave = () => {
    setHighlightedCells([]);
  };

  const values = useMemo(
    () => ({
      addRow,
      matrix,
      deleteRow,
      tableSize,
      sethighlightCount,
      setTableSize,
      highlightedCells,
      handleMouseEnter,
      handleMouseLeave,
      increaseCellValue,
    }),
    [tableSize, matrix, increaseCellValue, highlightedCells]
  );
  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};
