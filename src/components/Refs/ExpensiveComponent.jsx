import React, { useRef, useState } from "react";

export function ExpensiveComponent() {
  const expensiveValueRef = useRef(0);
  const [count, setCount] = useState(0);

  const calculateExpensiveValue = () => {
    if (expensiveValueRef.current === 0) {
      // Perform expensive calculation
      expensiveValueRef.current = "42";
      console.log("expensiveValueRef.current");
    }
    return expensiveValueRef.current;
  };

  console.log("expensive render");

  return (
    <div>
      <hr></hr>
      <p>Expensive Value: {calculateExpensiveValue()}</p>
      <button onClick={() => setCount(count + 1)}>Increment expensive</button>
      <p>count: {count}</p>
    </div>
  );
}
