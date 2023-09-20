import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App.jsx";
import "./index.css";
// import { MyElement } from "./components/CreateElement/CreateElement";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

{
  /* <MyElement /> Uncaught Error: Element type is invalid: expected a string
(for built-in components) or a class/function (for composite components) but
got: object. */
}
console.log("getState:", store.getState());
