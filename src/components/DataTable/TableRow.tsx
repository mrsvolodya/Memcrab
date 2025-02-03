import { TableCell } from "./TableCell";
import { CellType } from "../../types/CellType";
import { IconButton } from "../UI elements/IconButton/IconButton";
import { memo, useCallback, useContext, useMemo } from "react";
import { TableContext } from "../../contexts/TableContext";
import { getRowTitle } from "../../utils/getRowTitle";
import DeleteIcon from "../../assets/icon-del.svg";
import style from "../DataTable/DataTable.module.scss";
import { getPersentOfSum } from "../../utils/getPersentOfSum";
import { HighlightContext } from "../../contexts/HighlightContext";

type TableRowProps = {
  cells: CellType[];
  rowID: number;
};

const TableRowBase = ({ cells, rowID }: TableRowProps) => {
  const { deleteRow } = useContext(TableContext);
  const { isPersent } = useContext(HighlightContext);

  const handleDelete = useCallback(() => deleteRow(rowID), [deleteRow, rowID]);

  const sum = cells.reduce((acc, col) => acc + col.amount, 0);

  const percentages = useMemo(
    () =>
      isPersent.isActive && isPersent.id === rowID
        ? getPersentOfSum(sum, cells)
        : [],
    [isPersent, rowID, sum, cells]
  );

  const title = getRowTitle(cells[0].id);
  const isSumHovered = isPersent.isActive && isPersent.id === rowID || '';

  return (
    <>
      <tr className={(style.table__row, isSumHovered && style[`table__row--sum`])}>
        <th scope="row" className={style.table__cell}>
          <IconButton icon={DeleteIcon} onClick={handleDelete} title={title} />
        </th>
        {cells.map((cell, cellIndex) => {
          return (
            <TableCell
              key={cell.id}
              rowId={rowID}
              cellId={cell.id}
              value={isSumHovered ? `${percentages[cellIndex]} %` : cell.amount}
            />
          );
        })}

        <TableCell value={sum} rowId={rowID} />
      </tr>
    </>
  );
};

export const TableRow = memo(TableRowBase);
