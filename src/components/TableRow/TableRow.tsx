import React from "react";
import style from "../DataTable/DataTable.module.scss";
import TableCell from "../TableCell/TableCell";
import { CellType } from "../../types/CellType";

type TableRowProps = {
  row: CellType[];
  rowIndex: number;
};

const TableRow = React.memo(({ row, rowIndex }: TableRowProps) => {
  return (
    <tr className={style.table_row}>
      <th scope="row" className={style.table_cell}>
        Cell Value M = {rowIndex + 1}
      </th>
      {row.map((cell) => (
        <TableCell key={cell.id} cell={cell.amount} />
      ))}
    </tr>
  );
});

export default TableRow;
