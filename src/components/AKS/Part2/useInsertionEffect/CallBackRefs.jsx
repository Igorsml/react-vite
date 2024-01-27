import { useState, useCallback } from "react";
import { useLatest } from "./useLatest";

export const CallBackRefs = () => {
  const [elements, setElements] = useState([]);
  const latestElements = useLatest(elements);

  const addElement = () => {
    setElements((elements) => [...elements, Math.round(Math.random() * 100)]);
  };

  const cbRef = useCallback(
    (element) => {
      if (!element) return;

      const latestElement = latestElements.current.at(-1);
      console.log("mounted element with value:", latestElement);
    },
    [latestElements]
  );

  return (
    <div>
      <button onClick={addElement}>Add with cB refs</button>
      {elements.map((element) => (
        <div ref={cbRef} key={element}>
          {element}
        </div>
      ))}
    </div>
  );
};
