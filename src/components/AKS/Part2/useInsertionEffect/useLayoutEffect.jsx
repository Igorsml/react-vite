import { useReducer, useLayoutEffect, useCallback } from "react";

export const UseLayoutEffectTest = () => {
  const [count, increment4] = useReducer((value) => value + 1, 0);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  const cbRef = useCallback(() => {
    console.log("cb ref");
  }, []);

  return (
    <>
      <div ref={cbRef}>
        <div>{count}</div>
        <button onClick={increment4}>Increment with ULE</button>
      </div>
    </>
  );
};
