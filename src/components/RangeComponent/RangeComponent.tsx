import { AxisKey } from "../../enums/AxisKey";
import style from "./RangeComponent.module.scss";
import { RangeInput } from "./RangeInput/RangeInput";

export const RangeComponent = () => {
  return (
    <div className={style.rangeContaiter}>
      <h4 className={style.rangeContaiter_title}>Range from 0 to 100</h4>
      <RangeInput axis={AxisKey.M} />
      <RangeInput axis={AxisKey.N} />
    </div>
  );
};
