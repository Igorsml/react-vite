import { useState, useEffect, useRef, useCallback } from "react";

export const useInputValue = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const ref = useRef();

  const handler = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("keyup", handler);
    }
    return () => ref.current.removeEventListener("keyup", handler);
  }, [handler]);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = initValue;
    }
  }, []);

  return [ref, value];
};
