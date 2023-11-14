import { useState } from "react";

export const CounterSetCount = () => {
  const [count, setCount] = useState(0);

  // console.log("counter rendered");
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment setStateCount with re-render, count: {count}
    </button>
  );
};
