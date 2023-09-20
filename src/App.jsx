import React, { isValidElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/store";
import { Provider } from "react-redux";
import { storeTodo } from "./store/storeTodo";
import { ContextParent } from "./components/ContextParent/ContextParent";
import { CounterUseState } from "./components/CounterUseState/CounterUseState";
import { NewTodo } from "./components/NewTodo/NewTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { MyElement } from "./components/CreateElement/CreateElement";

import "./App.css";

function App() {
  return (
    <div className="main">
      <ContextParent />
      <Counter />
      <Counter />
      <CounterUseState />
      <CounterUseState />
      <Provider store={storeTodo}>
        <NewTodo />
        <TodoList />
      </Provider>
      {/* <MyElement /> */}
    </div>
  );
}

console.log("isValidElement:", isValidElement(<MyElement />)); // true
console.log("typeof:", typeof (<MyElement />)); // object
console.log("CreateElement:", <MyElement />); //

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux store</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(reset)}>reset</button>
    </div>
  );
};

export default App;
