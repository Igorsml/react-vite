import { useState, useRef, useEffect } from "react";

export const ValueChangeDetector = (props) => {
  const prevValueRef = useRef(0);

  useEffect(() => {
    if (
      prevValueRef.current !== undefined &&
      prevValueRef.current !== props.value
    ) {
      console.log(
        "value change detected",
        prevValueRef.current,
        "->",
        props.value
      );
    }
    prevValueRef.current = props.value;
  }, [props.value]);

  return (
    <>
      <p>
        prevValueRef stores the previous value of the value prop, allowing us to
        compare it and take action when it changes.
      </p>
      <div>Value: {props.value}</div>
    </>
  );
};
