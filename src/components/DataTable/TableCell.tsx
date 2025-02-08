import { memo, useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { HighlightContext } from "../../contexts/HighlightContext";
import style from "./DataTable.module.scss";

type TableCellProps = {
  rowId?: number;
  cellId?: string;
  value: number | string;
};

export const TableCellBase = ({ rowId, cellId, value }: TableCellProps) => {
  const { increaseCellValue } = useContext(TableContext);
  const { highlightedCells, handleMouseEnter, handleMouseLeave } =
    useContext(HighlightContext);

  const handleCellClick = () => {
    if (rowId !== undefined && cellId) {
      increaseCellValue(rowId, cellId);
    }
  };

  const isHighlighted = highlightedCells.includes(cellId ?? "");

  return (
    <td
      className={`${style.table__cell} ${
        isHighlighted ? style["table__cell--highlighted"] : ""
      } ${cellId ? style["table__cell--interactive"] : ""}`}
      onClick={handleCellClick}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => handleMouseEnter(+value, cellId!, rowId!)}
    >
      {value}
    </td>
  );
};

export const TableCell = memo(TableCellBase)
