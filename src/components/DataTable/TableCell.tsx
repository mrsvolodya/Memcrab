import React, { useContext } from "react";
import style from "./DataTable.module.scss";
import { TableContext } from "../../store/TableContext";

type TableCellProps = {
  rowId?: number;
  cellId?: string;
  children: React.ReactNode;
};

export const TableCell = ({ children, rowId, cellId }: TableCellProps) => {
  const { handleIncreaseOnClick, matrix } = useContext(TableContext);

  const handleOnCellClick = () => {
    if ((rowId || rowId === 0) && cellId) {
      handleIncreaseOnClick(rowId, cellId);
    }
  };

  return (
    <td
      className={`${style.table_cell} ${matrix[0] ? style.table_active : ""}`}
      onClick={handleOnCellClick}
    >
      {children}
    </td>
  );
};
