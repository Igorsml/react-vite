import { isValidElement, createElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/store";
import { Provider } from "react-redux";
import { storeTodo } from "../store/storeTodo";
import { ContextParent } from "../components/ContextParent/ContextParent";
import { CounterUseState } from "../components/CounterUseState/CounterUseState";
import { NewTodo } from "../components/NewTodo/NewTodo";
import { TodoList } from "../components/TodoList/TodoList";
import { MyElement } from "../components/CreateElement/CreateElement";
import { ReactKeys } from "../components/ReactKeys/ReactKeys";
import { ShowHide } from "../components/ShowHide/ShowHide";
import { Users } from "../components/ReactKeys/Users";
import { DogsOrder } from "../components/DogsOrder/DogsOrder";
import { CopyToClipBoard } from "../components/CopyToClipBoard/CopyToClipBoard";
import { Forms } from "../components/Forms/Forms";
import { MyForm } from "../components/MyForm/MyForm";
import { RegForm } from "../components/RegForm/RegForm";
import { ParentComponent } from "../components/Refs/ParentComponent";
import { InputRef } from "../components/Refs/InputRef";
import { ScreenSize } from "../components/ScreenSize/ScreenSize";
import { UseDebUseId } from "../components/AKS/Part1/useDebUseId";
import { ButtonsParent } from "../components/AKS/Part1/MemoAndCb/ButtonsParent";
import { CbAndUseEffect } from "./AKS/Part1/CbAndUseEffect/CbAndUseEffect";
import { MyComponent } from "./AKS/Part1/useDebugValue";
import { Comments } from "./AKS/Part2/Comments/Comments";
import { Basic } from "./AKS/Part2/useInsertionEffect/Basic";
import { BasicUseIE } from "./AKS/Part2/useInsertionEffect/BasicUseIE";
import { CallBackRefs } from "./AKS/Part2/useInsertionEffect/CallBackRefs";
import { UseLayoutEffectTest } from "./AKS/Part2/useInsertionEffect/useLayoutEffect";
import { UIHTestParent } from "./AKS/Part2/useImperativeHandle/UIHTestParent";
import { UOTest } from "./AKS/Part2/UOTest/UOTest";

export {
  ButtonsParent,
  CbAndUseEffect,
  MyComponent,
  ScreenSize,
  Comments,
  Basic,
  BasicUseIE,
  UseLayoutEffectTest,
  CallBackRefs,
  UIHTestParent,
  UOTest,
};
