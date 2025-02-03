import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";
import { IconButton } from "../UI elements/IconButton/IconButton";
import { memo, useCallback, useContext, useMemo } from "react";
import { TableContext } from "../../store/TableContext";
import { getRowTitle } from "../../utils/getRowTitle";
import DeleteIcon from "../../assets/icon-del.svg";
import style from "../DataTable/DataTable.module.scss";
import { getPersentOfSum } from "../../utils/getPersentOfSum";
import { HighlightContext } from "../../context/HighlightContext";

type TableRowProps = {
  cells: CellType[];
  rowID: number;
  sum: number;
};

const TableRowBase = ({ cells, rowID, sum }: TableRowProps) => {
  const { deleteRow } = useContext(TableContext);
  const { isPersent } = useContext(HighlightContext);

  const title = getRowTitle(cells[0].id);
  const handleDelete = useCallback(() => deleteRow(rowID), [deleteRow, rowID]);
  const percentages = useMemo(
    () => (isPersent.isActive && isPersent.id === rowID ? getPersentOfSum(sum, cells) : []),
    [isPersent, rowID, sum, cells]
  );

  return (
    <>
      <tr className={style.table_row}>
        <th scope="row" className={style.table_cell}>
          <IconButton
            icon={DeleteIcon}
            onClick={handleDelete}
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


export const TableRow = memo(TableRowBase)