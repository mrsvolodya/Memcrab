import { useContext } from "react";
import style from "./DataTable.module.scss";
import { TableContext } from "../../store/TableContext";
import { IconButton } from "../UI elements/IconButton/IconButton";
import PushIcon from "../../assets/icon-add-row.svg";

export const TableHead = () => {
  const { addRow, matrix } = useContext(TableContext);

  return (
    <thead className={style.table_head}>
      <tr className={style.table_row}>
        <th scope="col" className={style.table_cell}>
          <IconButton icon={PushIcon} title={"Add row:"} onClick={addRow} />
        </th>
        {matrix.length > 0 &&
          matrix[0].map((_, i) => (
            <th scope="col" className={style.table_cell} key={`header_${i}`}>
              Cell values N = {i + 1}
            </th>
          ))}
        <th scope="col" className={style.table_cell}>
          Sum values
        </th>
      </tr>
    </thead>
  );
};
