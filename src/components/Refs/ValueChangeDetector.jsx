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
      <div>ValueChangeDetector: {props.value}</div>
    </>
  );
};
