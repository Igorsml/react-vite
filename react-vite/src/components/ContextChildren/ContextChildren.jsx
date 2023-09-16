import React, { useContext, memo } from "react";
import { CountContext } from "../ContextParent/ContextParent";

export const ChildA = () => {
  console.log("Child A Render");

  return (
    <div>
      <h2>Child A</h2>
      <ChildB />
    </div>
  );
};

export const MemoizedChildA = memo(ChildA);

export const ChildB = () => {
  console.log("Child B Render");

  return (
    <>
      <h2>Child B</h2>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C Render");

  return (
    <>
      <h2>Child C = {count}</h2>
    </>
  );
};
