import React from "react";
import style from "../DataTable/DataTable.module.scss";

const TableCell = React.memo(({ cell }: { cell: number }) => {
  return <td className={style.table_cell}>{cell}</td>;
});

export default TableCell;
