import { useContext } from "react";
import style from "./DataTable.module.scss";
import { TableContext } from "../../contexts/TableContext";
import { IconButton } from "../UI elements/IconButton/IconButton";
import PushIcon from "../../assets/icon-add-row.svg";
import { MatrixContext } from "../../contexts/MatrixContext";

export const TableHead = () => {
  const { addRow } = useContext(TableContext);
  const matrixContext = useContext(MatrixContext);

  if (!matrixContext) return null;

  const { matrix } = matrixContext;

  return (
    <thead className={style.table__header}>
      <tr>
        <th scope="col" className={style.table__cell}>
          <IconButton icon={PushIcon} title={"Add row:"} onClick={addRow} />
        </th>
        {matrix.length > 0 &&
          matrix[0].map((_, i) => (
            <th scope="col" className={style.table__cell} key={`header_${i}`}>
              Cell values 
              <br />
              N = {i + 1}
            </th>
          ))}
        <th scope="col" className={style.table__cell}>
          Sum values
        </th>
      </tr>
    </thead>
  );
};
