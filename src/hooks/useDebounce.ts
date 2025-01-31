import { useEffect, useState } from "react";

export const useDebounce = <T>(debounceValue: T, delay: number = 500): T => {
  const [value, setValue] = useState<T>(debounceValue);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setValue(debounceValue);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [debounceValue, delay]);

  return value;
};
