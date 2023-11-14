import { useState, useEffect, useDebugValue, useId } from "react";

export const HooksTest = () => {
  const [value, setValue] = useState(() => () => console.log("default ooops"));
  const [count, setCount] = useState(0);
  const passwordHintId = useId();
  console.log("passwordHintId:", passwordHintId);
  const items = [1, 2, 3, 4, 5, 6, 7];

  useDebugValue(`Items count: ${items.length}`);

  return (
    <div>
      <button onClick={value}>Show Ooops</button>
      <button
        onClick={() => {
          setValue(() => () => console.log("other ooops"));
        }}
      >
        change oops
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
