import style from "./DataTable.module.scss";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { useContext } from "react";
import { HighlightContext } from "../../contexts/HighlightContext";

export const DataTable = () => {
  const { handleMouseLeave } = useContext(HighlightContext);

  return (
    <table className={style.table} onMouseLeave={handleMouseLeave}>
      <TableHead />
      <TableBody />
    </table>
  );
};
