import { useState, useRef, useEffect } from "react";

export const CounterRef = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      Now: {count}, before: {prevCount}
    </>
  );
};
