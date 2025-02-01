import style from "../DataTable/DataTable.module.scss";
import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";
import { IconButton } from "../UI elements/IconButton/IconButton";
import { useContext } from "react";
import { TableContext } from "../../store/TableContext";
import DeleteIcon from "../../assets/icon-del.svg";

type TableRowProps = {
  cells: CellType[];
  rowID: number;
};

export const TableRow = ({ cells, rowID }: TableRowProps) => {
  const { handleDeleteRow } = useContext(TableContext);
  const sum = cells.reduce((acc, col) => acc + col.amount, 0);
  return (
    <>
      <tr className={style.table_row}>
        <th scope="row" className={style.table_cell}>
          <span>Cell Value M = {rowID + 1}</span>
          <IconButton
            icon={DeleteIcon}
            onClick={() => handleDeleteRow(rowID)}
          />
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
