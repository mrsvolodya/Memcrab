import { useContext } from "react";
import { TableContext } from "../../store/TableContext";
import { AxisType } from "../../types/AxisType";
import style from "./RangeInput.module.scss";
import { convertAxisToName } from "../../utils/convertAxisToName";

type AxisProps = {
  axis: AxisType;
};

export function RangeInput({ axis }: AxisProps) {
  const { range, setRange } = useContext(TableContext);

  function handleRange(v: number) {
    setRange((prevRange) => ({
      ...prevRange,
      [axis]: v,
    }));
  }

  const rangeOf = convertAxisToName(axis, range);
  return (
    <div className={style.range}>
      <label htmlFor={axis} className={style.range_name}>
        {axis}: {range[axis]} {""}
        {rangeOf}
      </label>
      <input
        type="range"
        id={axis}
        name={`range of ${axis}`}
        min="0"
        max="100"
        value={range[axis]}
        onChange={(e) => handleRange(+e.target.value)}
      />
    </div>
  );
}
