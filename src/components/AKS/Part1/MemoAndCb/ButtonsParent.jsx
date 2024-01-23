import { useState, useCallback } from "react";
import CounterButton, { HelloButton } from "./Buttons";

export const ButtonsParent = () => {
  const [counter, setCounter] = useState(0);

  const ClickHelloButton = useCallback(
    () => console.count("click Hello button"),
    []
  );

  return (
    <div>
      <p>Counter: {counter}</p>
      <HelloButton ClickHelloButton={ClickHelloButton} />
      <CounterButton counter={counter} setCounter={setCounter} />
    </div>
  );
};
