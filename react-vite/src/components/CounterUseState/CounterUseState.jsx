import { useState } from "react";

export const CounterUseState = () => {
  const [useStateCounter, setUseStateCounter] = useState(0);
  const resetCounter = () => setUseStateCounter(0);

  return (
    <div>
      <h2>useSate</h2>
      <h3>{useStateCounter}</h3>
      <button onClick={() => setUseStateCounter(useStateCounter - 1)}>-</button>
      <button onClick={() => setUseStateCounter(useStateCounter + 1)}>+</button>
      <button onClick={() => resetCounter()}>reset</button>
    </div>
  );
};
