import { useInsertionEffect, useLayoutEffect, useRef } from "react";

export function useLatest(value) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
  // useInsertionEffect(() => {
  //   valueRef.current = value;
  // }, [value]);

  return valueRef;
}
