import { useReducer, useEffect } from "react";

export const Basic = () => {
  const [count, increment] = useReducer((value) => value + 1, 0);

  useEffect(() => {
    console.log("Добавлен слушатель 1");

    const handleClick = () => console.log("count:", count);

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};
