import { useContext } from "react";
import { AxisType } from "../../../types/AxisType.ts";
import { TableContext } from "../../../store/TableContext.tsx";
import { convertAxisToName } from "../../../utils/convertAxisToName.ts";
import style from "./RangeInput.module.scss";
import { AxisKey } from "../../../enums/AxisKey.ts";
import { calcLimitForX } from "../../../utils/calcLimitForX.ts";

type AxisProps = {
  axis: AxisType;
  min?: number;
  max?: number;
};

export const RangeInput: React.FC<AxisProps> = ({
  axis,
  min = 0,
  max = 100,
}) => {
  const { inputRange, setInputRange, sethighlightCount } =
    useContext(TableContext);

  const rangeOf = convertAxisToName(axis, inputRange);

  const handleInputChange = (newRange: number) => {
    if (axis === AxisKey.X) {
      requestAnimationFrame(() => {
        sethighlightCount(newRange);
      });
    }

    setInputRange((prevInputRange) => ({
      ...prevInputRange,
      X: Math.min(prevInputRange.X, calcLimitForX(inputRange)),
      [axis]: newRange,
    }));
  };
  return (
    <div className={style.range}>
      <label htmlFor={axis} className={style.range_name}>
        {axis}: {inputRange[axis]} {rangeOf}
      </label>
      <input
        type="range"
        id={axis}
        name={`range of ${axis}`}
        min={min}
        max={max}
        value={inputRange[axis]}
        onChange={(e) => handleInputChange(+e.target.value)}
      />
    </div>
  );
};
