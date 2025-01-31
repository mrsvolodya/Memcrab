/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../store/TableContext";
import { AxisType } from "../../types/AxisType";
import style from "./RangeInput.module.scss";
import { convertAxisToName } from "../../utils/convertAxisToName";
import { useDebounce } from "../../hooks/useDebounce.ts";

type AxisProps = {
  axis: AxisType;
};

export const RangeInput: React.FC<AxisProps> = ({ axis }) => {
  const { range, setRange } = useContext(TableContext);
  const [localValue, setLocalValue] = useState(range[axis]);

  const debounceValue = useDebounce(localValue, 200);

  useEffect(() => {
    setRange((prevRange) => ({
      ...prevRange,
      [axis]: localValue,
    }));
  }, [debounceValue]);

  function handleRange(v: number) {
    setLocalValue(v);
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
        value={localValue}
        onChange={(e) => handleRange(+e.target.value)}
      />
    </div>
  );
};
