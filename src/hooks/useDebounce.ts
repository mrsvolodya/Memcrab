import { useEffect, useState } from "react";

export const useDebounce = <T>(debounceValue: T, delay: number = 500): T => {
  const [value, setValue] = useState<T>(debounceValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(debounceValue);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [debounceValue, delay]);

  return value;
};
