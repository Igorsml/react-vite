import { useState, useRef, useEffect } from "react";

export const Interval = () => {
  const value = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      // It will always print the latest ref value
      // Reason: We used ref which gives us something like an instance field.
      // Conclusion: So, using ref is a solution
      console.log(value.current);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
};
