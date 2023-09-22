import React from "react";

export const MyElement = () =>
  React.createElement("div", {
    children: "Hi, I'm element",
  });

// если так то ошибка react-dom.development.js:28439 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object

// React.createElement("div", {
//   children: "Hi, I'm element",
// });
