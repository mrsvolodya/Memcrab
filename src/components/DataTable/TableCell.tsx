import { useContext } from "react";
import { TableContext } from "../../store/TableContext";
import style from "./DataTable.module.scss";
import { HighlightContext } from "../../context/HighlightContext";

type TableCellProps = {
  rowId?: number;
  cellId?: string;
  value: number | string;
};

export const TableCell = ({ rowId, cellId, value }: TableCellProps) => {
  const { increaseCellValue } = useContext(TableContext);
  const { highlightedCells, handleMouseEnter, handleMouseLeave } =
    useContext(HighlightContext);

  const handleCellClick = () => {
    if (rowId !== undefined && cellId) {
      increaseCellValue(rowId, cellId);
    }
  };

  return (
    <td
      className={`${style.table_cell} ${
        highlightedCells.includes(cellId ?? "") ? style.highlighted : ""
      }`}
      title={cellId && "Click to increase"}
      onClick={handleCellClick}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => handleMouseEnter(+value, cellId!, rowId!)}
    >
      {value}
    </td>
  );
};
