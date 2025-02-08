import { useContext } from "react";
import { AxisType } from "../../../types/AxisType.ts";
import { TableContext } from "../../../contexts/TableContext.tsx";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = +e.target.value;
    if (axis === AxisKey.X) {
      sethighlightCount(newRange);
    }

    setInputRange((prevInputRange) => ({
      ...prevInputRange,
      X: Math.min(prevInputRange.X, calcLimitForX(inputRange)),
      [axis]: newRange,
    }));
  };
  return (
    <div className={style.range}>
      <label htmlFor={axis} className={style.range__name}>
        {axis}: {inputRange[axis]} {rangeOf}
      </label>
      <input
        type="range"
        id={axis}
        className={style.range__input}
        name={`range of ${axis}`}
        min={min}
        max={max}
        value={inputRange[axis]}
        onChange={handleInputChange}
      />
    </div>
  );
};
