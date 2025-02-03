/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from "react";
import { TableProviderType } from "../types/TableProviderType";
import { TableContext } from "./TableContext";
import { createMatrix } from "../utils/createMatrix.ts";
import { MatrixType } from "../types/MatrixType.ts";
import { findNearestCells } from "../utils/findNearestCells.ts";
import { getNextRowIndex } from "../utils/getNextRowIndex.ts";
import { InputRangeType } from "../types/InputRangeType.ts";
import { INPUT_RANGE_DEFAULT } from "../constants/INPUT_RANGE_DEFAULT.ts";
import { PersentType } from "../types/PersentType.ts";
import { useDebounce } from "../hooks/useDebounce.ts";

export const TableProvider = ({ children }: TableProviderType) => {
  const [inputRange, setInputRange] =
    useState<InputRangeType>(INPUT_RANGE_DEFAULT);
  const [highlightCount, sethighlightCount] = useState(inputRange.X);
  const [highlightedCells, setHighlightedCells] = useState<string[]>([]);
  const [isPersent, setIsPersent] = useState<PersentType>({
    id: null,
    isActive: false,
  });
  const [matrix, setMatrix] = useState<MatrixType>(() =>
    createMatrix(inputRange)
  );

  const debouncedInputRange = useDebounce(inputRange, 2000);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMatrix((prevMatrix) => {
        const newMatrix = createMatrix(debouncedInputRange);
        return newMatrix.map((row, rowIndex) =>
          row.map((cell, cellIndex) => {
            const existingCell = prevMatrix[rowIndex]?.[cellIndex];
            return existingCell
              ? { ...cell, amount: existingCell.amount }
              : cell;
          })
        );
      });
    });
  }, [debouncedInputRange]);

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
    setInputRange((prev) => ({ ...prev, M: Math.max(prev.M - 1, 1) }));
  }, []);

  const addRow = () => {
    const nextRowIndex = getNextRowIndex(matrix);
    const newRow = createMatrix({ M: 1, N: inputRange.N }, nextRowIndex);

    setMatrix((prevMatrix) => [...prevMatrix, ...newRow]);
    setInputRange((prev) => ({ ...prev, M: prev.M + 1 }));
  };

  const handleMouseEnter = useCallback(
    (value: number, cellId: string = "", rowId: number) => {
      if (!cellId && !rowId && rowId !== 0) {
        setHighlightedCells([]);
        return;
      }

      if ((rowId === 0 || rowId) && !cellId) {
        setIsPersent({ id: rowId, isActive: true });
        return;
      }

      requestAnimationFrame(() => {
        setHighlightedCells(
          findNearestCells(matrix, value, highlightCount, cellId)
        );
      });
    },
    [matrix, highlightCount]
  );
  const handleMouseLeave = () => {
    setHighlightedCells([]);
    setIsPersent({ id: null, isActive: false });
  };

  const values = useMemo(
    () => ({
      addRow,
      matrix,
      isPersent,
      deleteRow,
      setMatrix,
      inputRange,
      setInputRange,
      highlightCount,
      highlightedCells,
      handleMouseEnter,
      handleMouseLeave,
      increaseCellValue,
      sethighlightCount,
    }),
    [matrix, increaseCellValue, highlightedCells, inputRange]
  );
  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};
