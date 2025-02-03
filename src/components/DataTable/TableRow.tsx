import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";
import { IconButton } from "../UI elements/IconButton/IconButton";
import { useContext, useMemo } from "react";
import { TableContext } from "../../store/TableContext";
import { getRowTitle } from "../../utils/getRowTitle";
import DeleteIcon from "../../assets/icon-del.svg";
import style from "../DataTable/DataTable.module.scss";
import { getPersentOfSum } from "../../utils/getPersentOfSum";

type TableRowProps = {
  cells: CellType[];
  rowID: number;
  sum: number;
};

export const TableRow = ({ cells, rowID, sum }: TableRowProps) => {
  const { deleteRow, isPersent } = useContext(TableContext);
  const title = getRowTitle(cells[0].id);

  const { percentages } = useMemo(() => {
    return {
      percentages: getPersentOfSum(sum, cells),
    };
  }, [cells, sum]);

  return (
    <>
      <tr className={style.table_row}>
        <th scope="row" className={style.table_cell}>
          <IconButton
            icon={DeleteIcon}
            onClick={() => deleteRow(rowID)}
            title={title}
          />
        </th>
        {cells.map((cell, cellIndex) => {
          return (
            <TableCell
              key={cell.id}
              rowId={rowID}
              cellId={cell.id}
              value={
                isPersent.isActive && isPersent.id === rowID
                  ? `${percentages[cellIndex]} %`
                  : cell.amount
              }
            />
          );
        })}

        <TableCell value={sum} rowId={rowID} />
      </tr>
    </>
  );
};
