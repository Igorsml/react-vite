import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Компонент, который будет предоставлять методы или значения
export const UIHTestChild = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Определяем, что мы хотим сделать доступным извне
  useImperativeHandle(ref, () => ({
    focus: () => {
      // Мы делаем метод focus() доступным из компонента-родителя
      inputRef.current.focus();
    },
    getValue: () => {
      // Мы делаем значение поля ввода доступным из компонента-родителя
      return inputRef.current.value;
    },
  }));

  return <input ref={inputRef} />;
});
