/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../../store/TableContext.tsx";
import { convertAxisToName } from "../../../utils/convertAxisToName.ts";
import { useDebounce } from "../../../hooks/useDebounce.ts";
import { AxisType } from "../../../types/AxisType.ts";
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
  const { tableSize, setTableSize, sethighlightCount } =
    useContext(TableContext);
  const [localRange, setLocalRange] = useState<number>(3);

  const debounceValue = useDebounce(localRange, 200);

  useEffect(() => {
    if (axis === AxisKey.X) {
      const maxX = calcLimitForX(tableSize);
      sethighlightCount(localRange);
      setLocalRange((prev) => Math.max(0, Math.min(prev, maxX)));
    }

    if (axis !== AxisKey.X && tableSize[axis] !== debounceValue) {
      setTableSize((prevRange) => ({
        ...prevRange,
        [axis]: debounceValue,
      }));
    }
  }, [debounceValue, tableSize]);

  const rangeOf = convertAxisToName(axis, tableSize);

  return (
    <div className={style.range}>
      <label htmlFor={axis} className={style.range_name}>
        {axis}: {localRange} {rangeOf}
      </label>
      <input
        type="range"
        id={axis}
        name={`range of ${axis}`}
        min={min}
        max={max}
        value={localRange}
        onChange={(e) => setLocalRange(+e.target.value)}
      />
    </div>
  );
};
