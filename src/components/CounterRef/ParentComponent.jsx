import { useState } from "react";
import { ChangeName } from "./ChangeName";
import { ValueChangeDetector } from "./ValueChangeDetector";
import { ExpensiveComponent } from "./ExpensiveComponent";
import { CounterRef } from "./CounterRef";
import { CounterSetCount } from "./CounterSetCount";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <button onClick={increment}>Increment parent count</button>
        <p>parent count : {count}</p>
        <CounterRef />
        <CounterSetCount />
        {/* <ValueChangeDetector value={count} /> */}
      </div>
      <div>
        <ExpensiveComponent />
      </div>
    </div>
  );
};
