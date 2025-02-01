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
    !matrix ||
    matrix.length === 0 ||
    matrix.every((row) => row.length === 0) ||
    !percentile
  ) {
    return null;
  }

  return (
    <tbody className={style.table_body}>
      {matrix.map((cells, i) => (
        <TableRow key={cells[0].id} cells={cells} rowID={i} />
      ))}
      <tr className={style.table_row}>
        <th className={style.table_cell}>50th percentile</th>
        {percentile.map((cell) => (
          <TableCell key={cell.id}>{cell.amount}</TableCell>
        ))}
      </tr>
    </tbody>
  );
};
