import { memo } from "react";

export const HelloButton = memo(({ ClickHelloButton }) => {
  console.count("Hello button render");

  return <button onClick={ClickHelloButton}>Click Hello</button>;
});

const CounterButton = ({ setCounter, counter }) => {
  console.count("Counter button render");
  return <button onClick={() => setCounter(counter + 1)}>Click</button>;
};

export default CounterButton;
