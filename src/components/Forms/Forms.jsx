import { useState, useEffect, useRef, useCallback } from "react";
import { useInputValue } from "../../hooks/useInputValue/useInputValue";

export const Forms = () => {
  const [value, setValue] = useState("");
  const [ref, value2] = useInputValue("aboba");

  return (
    <div>
      <h2>Я управляемый</h2>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value.toUpperCase())}
      />
      <h2>Я управляемый ref</h2>
      <p>value: {value2}</p>
      <input ref={ref} />
      <h2>Я неуправляемый</h2>
      <input />
    </div>
  );
};
