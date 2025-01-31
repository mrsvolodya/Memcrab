import { useContext, useMemo } from "react";
import style from "./DataTable.module.scss";
import { TableContext } from "../../store/TableContext";
import { createMatrix } from "../../utils/createMatrix";
import TableRow from "../TableRow/TableRow";

export const DataTable = () => {
  const { range } = useContext(TableContext);

  const matrix = useMemo(() => createMatrix(range), [range]);
  return (
    <table className={style.table}>
      <thead className={style.table_head}>
        <tr className={style.table_row}>
          <th scope="col" className={style.table_cell}></th>
          {matrix[0]?.map((_, i) => (
            <th scope="col" className={style.table_cell} key={`header_${i}`}>
              Cell values N = {i + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={style.table_body}>
        {matrix.map((row, i) => (
          <TableRow key={i} row={row} rowIndex={i} />
        ))}
      </tbody>
    </table>
  );
};
