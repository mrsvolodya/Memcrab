import { useContext } from "react";
import { TableContext } from "../../store/TableContext";
import { TableRow } from "./TableRow";
import style from "./DataTable.module.scss";
import { TableCell } from "./TableCell";
import { calcPercentail } from "../../utils/calcPercentail";

export const TableBody = () => {
  const { matrix } = useContext(TableContext);
  const percentile = calcPercentail(matrix);

  if (
    !matrix.length ||
    matrix.every((row) => row.length === 0) ||
    !percentile
  ) {
    return null;
  }

  return (
    <tbody className={style.table_body}>
      {matrix.map((cells, i) => {
        const sum = cells.reduce((acc, col) => acc + col.amount, 0);
        return <TableRow key={i} cells={cells} rowID={i} sum={sum} />;
      })}
      <tr className={style.table_row}>
        <th className={style.table_cell}>50th percentile</th>
        {percentile.map((cell) => (
          <TableCell key={cell.id} value={cell.amount} />
        ))}
      </tr>
    </tbody>
  );
};
