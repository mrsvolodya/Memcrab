import style from "../DataTable/DataTable.module.scss";
import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";
import { IconButton } from "../UI elements/IconButton/IconButton";
import { useContext } from "react";
import { TableContext } from "../../store/TableContext";
import DeleteIcon from "../../assets/icon-del.svg";
import { getRowTitle } from "../../utils/getRowTitle";

type TableRowProps = {
  cells: CellType[];
  rowID: number;
};

export const TableRow = ({ cells, rowID }: TableRowProps) => {
  const { deleteRow } = useContext(TableContext);
  const handleOnDelete = () => {
    deleteRow(rowID);
  };

  const sum = cells.reduce((acc, col) => acc + col.amount, 0);
  const title = getRowTitle(cells[0].id);
  return (
    <>
      <tr className={style.table_row}>
        <th scope="row" className={style.table_cell}>
          <IconButton
            icon={DeleteIcon}
            onClick={handleOnDelete}
            title={title}
          />
        </th>
        {cells.map((cell) => (
          <TableCell
            key={cell.id}
            rowId={rowID}
            cellId={cell.id}
            value={cell.amount}
          />
        ))}

        <TableCell value={sum} />
      </tr>
    </>
  );
};
