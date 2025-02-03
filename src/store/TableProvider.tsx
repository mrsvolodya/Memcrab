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
import { MatrixContext } from "../context/MatrixContext.tsx";
import { HighlightContext } from "../context/HighlightContext.tsx";

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

  useEffect(() => {
    setMatrix((prevMatrix) => {
      if (
        prevMatrix.length === inputRange.M &&
        prevMatrix[0]?.length === inputRange.N
      ) {
        return prevMatrix;
      }
      return createMatrix(inputRange);
    });
  }, [inputRange]);

  const increaseCellValue = useCallback(
    (rowId: number, cellId: string) => {
      setMatrix((prevMatrix) =>
        prevMatrix.map((row, i) =>
          i === rowId
            ? row.map((cell) =>
                cell.id === cellId ? { ...cell, amount: cell.amount + 1 } : cell
              )
            : row
        )
      );
    },
    [setMatrix]
  );

  const deleteRow = useCallback(
    (rowId: number) => {
      setMatrix((prevMatrix) => {
        return prevMatrix.filter((_, index) => rowId !== index);
      });
      setInputRange((prev) => ({ ...prev, M: Math.max(prev.M - 1, 1) }));
    },
    [setMatrix, setInputRange]
  );

  const addRow = useCallback(() => {
    const nextRowIndex = getNextRowIndex(matrix);
    const newRow = createMatrix({ M: 1, N: inputRange.N }, nextRowIndex);

    setMatrix((prevMatrix) => [...prevMatrix, ...newRow]);
    setInputRange((prev) => ({ ...prev, M: prev.M + 1 }));
  }, [matrix, inputRange.N, setMatrix, setInputRange]);

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

  const tableValues = useMemo(
    () => ({
      addRow,
      deleteRow,
      inputRange,
      setInputRange,
      highlightCount,
      increaseCellValue,
      sethighlightCount,
    }),
    [inputRange]
  );

  const matrixValues = useMemo(() => ({ matrix, setMatrix }), [matrix]);

  const highlightValues = useMemo(
    () => ({
      isPersent,
      highlightedCells,
      handleMouseEnter,
      handleMouseLeave,
    }),
    [isPersent, highlightedCells]
  );
  return (
    <MatrixContext.Provider value={matrixValues}>
      <TableContext.Provider value={tableValues}>
        <HighlightContext.Provider value={highlightValues}>
          {children}
        </HighlightContext.Provider>
      </TableContext.Provider>
    </MatrixContext.Provider>
  );
};
