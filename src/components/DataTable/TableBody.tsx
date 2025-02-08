import { useContext } from "react";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { calcPercentail } from "../../utils/calcPercentail";
import { MatrixContext } from "../../contexts/MatrixContext";
import style from "./DataTable.module.scss";

export const TableBody = () => {
  const matrixContext = useContext(MatrixContext);
  if (!matrixContext) return null;
  const { matrix } = matrixContext;
  const percentile = calcPercentail(matrix);

  if (
    !matrix.length ||
    matrix.every((row) => row.length === 0) ||
    !percentile
  ) {
    return null;
  }

  return (
    <tbody className={style.table__body}>
      {matrix.map((cells, i) => {
        return <TableRow key={i} cells={cells} rowID={i} />;
      })}
      <tr className={style.table__row}>
        <th className={style.table__cell}>50th percentile</th>
        {percentile.map((cell) => (
          <TableCell key={cell.id} value={cell.amount} />
        ))}
      </tr>
    </tbody>
  );
};
