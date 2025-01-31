import { useContext, useMemo } from "react";
import { createMatrix } from "../../utils/createMatrix";
import { TableContext } from "../../store/TableContext";
import { TableRow } from "./TableRow";
import style from "./DataTable.module.scss";
import { TableCell } from "./TableCell";
import { calculatePercentail } from "../../utils/calculatePercentail";

export const TableBody = () => {
  const { range } = useContext(TableContext);

  const matrix = useMemo(() => createMatrix(range), [range]);
  const percentile = calculatePercentail(matrix);

  return (
    <tbody className={style.table_body}>
      {matrix.map((cells, i) => (
        <TableRow key={i} cells={cells} rowIndex={i} />
      ))}
      <tr className={style.table_row}>
        <th className={style.table_cell}>50th percentile</th>
        {percentile.map((cell, i) => (
          <TableCell key={i}>{cell.amount}</TableCell>
        ))}
      </tr>
    </tbody>
  );
};
