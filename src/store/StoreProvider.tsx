/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { TableContext } from "../contexts/TableContext.tsx";
import { createMatrix } from "../utils/createMatrix.ts";
import { MatrixType } from "../types/MatrixType.ts";
import { findNearestCells } from "../utils/findNearestCells.ts";
import { getNextRowIndex } from "../utils/getNextRowIndex.ts";
import { InputRangeType } from "../types/InputRangeType.ts";
import { INPUT_RANGE_DEFAULT } from "../constants/INPUT_RANGE_DEFAULT.ts";
import { PersentType } from "../types/PersentType.ts";
import { MatrixContext } from "../contexts/MatrixContext.tsx";
import { HighlightContext } from "../contexts/HighlightContext.tsx";
import { TableProviderType } from "../types/TableProviderType.ts";

export const StoreProvider = ({ children }: TableProviderType) => {
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

  const increaseCellValue = (rowId: number, cellId: string) => {
    setMatrix((prevMatrix) =>
      prevMatrix.map((row, i) =>
        i === rowId
          ? row.map((cell) =>
              cell.id === cellId ? { ...cell, amount: cell.amount + 1 } : cell
            )
          : row
      )
    );
  };

  const deleteRow = (rowId: number) => {
    setMatrix((prevMatrix) => {
      return prevMatrix.filter((_, index) => rowId !== index);
    });
    setInputRange((prev) => ({ ...prev, M: Math.max(prev.M - 1, 1) }));
  };

  const addRow = () => {
    const nextRowIndex = getNextRowIndex(matrix);
    const newRow = createMatrix({ M: 1, N: inputRange.N }, nextRowIndex);

    setMatrix((prevMatrix) => [...prevMatrix, ...newRow]);
    setInputRange((prev) => ({ ...prev, M: prev.M + 1 }));
  };

  const handleMouseEnter = (
    value: number,
    cellId: string = "",
    rowId: number
  ) => {
    if (!cellId && !rowId && rowId !== 0) {
      setHighlightedCells([]);
      return;
    }

    if ((rowId === 0 || rowId) && !cellId) {
      setIsPersent({ id: rowId, isActive: true });
      return;
    }

    setHighlightedCells(
      findNearestCells(matrix, value, highlightCount, cellId)
    );
  };

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
