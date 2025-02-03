import style from "./DataTable.module.scss";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { memo, useContext } from "react";
import { HighlightContext } from "../../contexts/HighlightContext";

const DataTableBase = () => {
  const { handleMouseLeave } = useContext(HighlightContext);

  return (
    <table className={style.table} onMouseLeave={handleMouseLeave}>
      <TableHead />
      <TableBody />
    </table>
  );
};

export const DataTable = memo(DataTableBase);
