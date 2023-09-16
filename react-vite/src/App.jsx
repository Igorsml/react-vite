import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/store";
import { ContextParent } from "./components/ContextParent/ContextParent";
import { CounterUseState } from "./components/CounterUseState/CounterUseState";
import { NewTodo } from "./components/NewTodo/NewTodo";
import { TodoList } from "./components/TodoList/TodoList";

import "./App.css";

function App() {
  return (
    <div className="main">
      <ContextParent />
      <Counter />
      <Counter />
      <CounterUseState />
      <CounterUseState />
      <NewTodo />
      <TodoList />
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
