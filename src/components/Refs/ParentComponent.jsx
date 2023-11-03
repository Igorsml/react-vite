import { useState } from "react";
import { ChangeName } from "./ChangeName";
import { ValueChangeDetector } from "./ValueChangeDetector";
import { ExpensiveComponent } from "./ExpensiveComponent";
import { CounterRef } from "./CounterRef";
import { CounterSetCount } from "./CounterSetCount";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <CounterRef />
        <hr></hr>
        <CounterSetCount />
        <ValueChangeDetector value={count} />
      </div>
      <div>
        <ExpensiveComponent />
      </div>
    </div>
  );
};
