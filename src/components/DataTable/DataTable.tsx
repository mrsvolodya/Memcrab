import style from "./DataTable.module.scss";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { useContext } from "react";
import { TableContext } from "../../store/TableContext";

export const DataTable = () => {
  const { handleMouseLeave } = useContext(TableContext);
  return (
    <table className={style.table} onMouseLeave={handleMouseLeave}>
      <TableHead />
      <TableBody />
    </table>
  );
};
