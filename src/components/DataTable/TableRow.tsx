import React from "react";
import style from "../DataTable/DataTable.module.scss";
import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";

type TableRowProps = {
  cells: CellType[];
  rowIndex: number;
};

export const TableRow = React.memo(({ cells, rowIndex }: TableRowProps) => {
  const sum = cells.reduce((acc, col) => acc + col.amount, 0);
  return (
    <>
      <tr className={style.table_row}>
        <th scope="row" className={style.table_cell}>
          Cell Value M = {rowIndex + 1}
        </th>
        {cells.map((cell) => (
          <TableCell key={cell.id}> {cell.amount}</TableCell>
        ))}
        <TableCell>{sum}</TableCell>
      </tr>
    </>
  );
});
