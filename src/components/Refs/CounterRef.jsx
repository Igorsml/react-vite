import { useRef } from "react";

export const CounterRef = () => {
  const countRef = useRef(0);
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("useRef counter rendered");

  return (
    <div>
      <button onClick={handle}>Try rerender</button>
    </div>
  );
};
