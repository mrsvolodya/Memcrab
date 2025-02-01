import style from "../DataTable/DataTable.module.scss";
import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";

type TableRowProps = {
  cells: CellType[];
  rowID: number;
};

export const TableRow = ({ cells, rowID }: TableRowProps) => {
  const sum = cells.reduce((acc, col) => acc + col.amount, 0);
  return (
    <>
      <tr className={style.table_row}>
        <th scope="row" className={style.table_cell}>
          Cell Value M = {rowID + 1}
        </th>
        {cells.map((cell) => (
          <TableCell key={cell.id} rowId={rowID} cellId={cell.id}>
            {" "}
            {cell.amount}
          </TableCell>
        ))}
        <TableCell>{sum}</TableCell>
      </tr>
    </>
  );
};
