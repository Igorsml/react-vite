import { useState } from "react";
import { CounterRef } from "./CounterRef";
import { ChangeName } from "./ChangeName";

export const ParentComponent = () => {
  const [isShowing, setIsShowing] = useState(true);

  const unmountComponent = (s) => {
    setIsShowing((s) => !s);
  };

  return (
    <>
      <button onClick={unmountComponent}>
        {isShowing ? "Unmount" : "Mount"} This Component
      </button>
      {isShowing && <ChangeName unmount={unmountComponent} />}
    </>
  );
};
