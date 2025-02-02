import { useContext } from "react";
import { TableContext } from "../../store/TableContext";
import style from "./DataTable.module.scss";

type TableCellProps = {
  rowId?: number;
  cellId?: string;
  value: number | string;
};

export const TableCell = ({ rowId, cellId, value }: TableCellProps) => {
  const {
    increaseCellValue,
    highlightedCells,
    handleMouseEnter,
    handleMouseLeave,
  } = useContext(TableContext);

  const handleCellClick = () => {
    if ((rowId || rowId === 0) && cellId) {
      increaseCellValue(rowId, cellId);
    }
  };

  const titleMessage = cellId && "Click to increase";
  return (
    <td
      className={`${style.table_cell} ${
        highlightedCells.includes(cellId!) ? style.highlighted : ""
      }`}
      title={titleMessage}
      onClick={handleCellClick}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => handleMouseEnter(+value, cellId!, rowId!)}
    >
      {value}
    </td>
  );
};
