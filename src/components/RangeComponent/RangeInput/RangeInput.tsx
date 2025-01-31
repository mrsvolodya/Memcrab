/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../../store/TableContext.tsx";
import { convertAxisToName } from "../../../utils/convertAxisToName.ts";
import { useDebounce } from "../../../hooks/useDebounce.ts";
import { AxisType } from "../../../types/AxisType.ts";
import style from "./RangeInput.module.scss";

type AxisProps = {
  axis: AxisType;
};

export const RangeInput: React.FC<AxisProps> = ({ axis }) => {
  const { range, setRange } = useContext(TableContext);
  const [locaRange, setLocalRange] = useState<number>(3);

  const debounceValue = useDebounce(locaRange, 300);

  useEffect(() => {
    setRange((prevRange) => ({
      ...prevRange,
      [axis]: debounceValue,
    }));
  }, [debounceValue]);

  const rangeOf = convertAxisToName(axis, range);
  return (
    <div className={style.range}>
      <label htmlFor={axis} className={style.range_name}>
        {axis}: {locaRange} {""}
        {rangeOf}
      </label>
      <input
        type="range"
        id={axis}
        name={`range of ${axis}`}
        min="0"
        max="100"
        value={locaRange}
        onChange={(e) => setLocalRange(+e.target.value)}
      />
    </div>
  );
};
