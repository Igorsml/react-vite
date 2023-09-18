import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/storeTodo";
import classes from "./NewTodo.module.scss";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input className={classes.button} type="submit" value="Add todo" />
    </form>
  );
};
