import style from "./DeleteBtn.module.scss";
import DeleteIcon from "../../../assets/icon-del.svg";
import { useContext } from "react";
import { TableContext } from "../../../store/TableContext";

type DeleteButtonProps = {
  rowId: number;
};
export const DeleteButton = ({ rowId }: DeleteButtonProps) => {
  const { handleDeleteRow } = useContext(TableContext);
  return (
    <button onClick={() => handleDeleteRow(rowId)} className={style.deleteBtn}>
      <img src={DeleteIcon} alt="Delete" />
    </button>
  );
};
