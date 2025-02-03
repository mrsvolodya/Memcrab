import { useContext } from "react";
import { AxisKey } from "../../enums/AxisKey";
import { RangeInput } from "./RangeInput/RangeInput";
import { TableContext } from "../../store/TableContext";
import { calcLimitForX } from "../../utils/calcLimitForX";
import style from "./RangeComponent.module.scss";

export const RangeComponent = () => {
  const { inputRange } = useContext(TableContext);
  const maxCellsX = calcLimitForX(inputRange);
  return (
    <div className={style.rangeContaiter}>
      <h4 className={style.rangeContaiter_title}>Range for M , N, X</h4>
      <RangeInput axis={AxisKey.M} min={0} max={100} />
      <RangeInput axis={AxisKey.N} min={0} max={100} />
      <RangeInput axis={AxisKey.X} min={0} max={maxCellsX} />
    </div>
  );
};
