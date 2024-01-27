import { useReducer, useEffect } from "react";
import { useLatest } from "./useLatest";

export const BasicUseIE = () => {
  const [count, increment2] = useReducer((value) => value + 1, 0);
  const latestCount = useLatest(count);

  useEffect(() => {
    console.log("-----------------");
    console.log("Добавлен слушатель 2");

    const handleClick = () => console.log("latest count:", latestCount);

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [latestCount]);

  return (
    <>
      <p>Latest Count: {count}</p>
      <button onClick={increment2}>Increment with UIE</button>
    </>
  );
};
