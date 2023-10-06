// import React, { isValidElement, createElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/store";
import { Provider } from "react-redux";
import { storeTodo } from "./store/storeTodo";
import { ContextParent } from "./components/ContextParent/ContextParent";
import { CounterUseState } from "./components/CounterUseState/CounterUseState";
import { NewTodo } from "./components/NewTodo/NewTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { MyElement } from "./components/CreateElement/CreateElement";
// import { ReactKeys } from "./components/ReactKeys/ReactKeys";
import { ShowHide } from "./components/ShowHide/ShowHide";
import { Users } from "./components/ReactKeys/Users";
import { DogsOrder } from "./components/DogsOrder/DogsOrder";
import { CopyToClipBoard } from "./components/CopyToClipBoard/CopyToClipBoard";
import { Forms } from "./components/Forms/Forms";

import "./App.css";

function App() {
  return (
    <div className="main">
      <ShowHide />
      <CopyToClipBoard />
      <Forms />
      <DogsOrder />
      <details>
        <summary>Prev Q&A</summary>
        <div className="content">
          <div className="main">
            <MyElement />
            {/* <ReactKeys /> */}
            <Users />
            <ContextParent />
            <Counter />
            <Counter />
            <CounterUseState />
            <CounterUseState />
            <Provider store={storeTodo}>
              <NewTodo />
              <TodoList />
            </Provider>
          </div>
        </div>
      </details>
    </div>
  );
}

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
