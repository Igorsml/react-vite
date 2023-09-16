import React, { useState, createContext } from "react";
import { MemoizedChildA } from "../ContextChildren/ContextChildren";

export const CountContext = createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log("ContextParent Render");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <CountProvider value={count}>
        <MemoizedChildA />
      </CountProvider>
    </>
  );
};
