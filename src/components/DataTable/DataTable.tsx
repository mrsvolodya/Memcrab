import style from "./DataTable.module.scss";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

export const DataTable = () => {
  return (
    <table className={style.table}>
      <TableHead />
      <TableBody />
    </table>
  );
};
