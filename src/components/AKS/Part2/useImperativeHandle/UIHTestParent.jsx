import { useRef } from "react";
import { UIHTestChild } from "./UIHTestChild";

// Родительский компонент, который использует MyComponent
export const UIHTestParent = () => {
  const myComponentRef = useRef(null);

  // При обращении к методам и значениям из дочернего компонента
  const handleClick = () => {
    // Получаем значение поля ввода
    console.log("getValue method:", myComponentRef.current.getValue());

    // Фокусируемся на поле ввода
    myComponentRef.current.focus();
  };

  return (
    <div>
      <UIHTestChild ref={myComponentRef} />
      <button onClick={handleClick}>UIH methods values</button>
    </div>
  );
};
