import React from "react";
import style from "./DataTable.module.scss";

export const TableCell = React.memo(
  ({ children }: { children: React.ReactNode }) => {
    return <td className={style.table_cell}>{children}</td>;
  }
);
