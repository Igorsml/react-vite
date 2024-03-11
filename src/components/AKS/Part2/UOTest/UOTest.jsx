import { useEffect, useState, useOptimistic } from "react";
import useOptimisticState from "@perceived/use-optimistic-state";
import { Button, message } from "antd";

import fakeAPIRoutine from "./fakeApi";

import "antd/dist/reset.css";
import "./UOTest.module.scss";

export const UOTest = () => {
  const {
    state: likes,
    updateState: updateLikes,
    result,
    error,
  } = useOptimisticState(0, fakeAPIRoutine);

  useEffect(() => {
    if (error) {
      message.error({
        content: error,
        duration: 2,
      });
    }
  }, [error]);

  useEffect(() => {
    if (result) {
      message.success({
        content: "Api successfull!",
        duration: 2,
      });
    }
  }, [result]);

  const [regulareState, updateRegularState] = useState(0);
  const optimisticApi = (is, id) => {
    if (id === "b1") {
      document.getElementById("b1").style.backgroundColor = "#ffffff";
      document.getElementById("b1").style.color = "#1890ff";
      setTimeout(() => {
        document.getElementById("b1").style.backgroundColor = "#1890ff";
        document.getElementById("b1").style.color = "#ffffff";
      }, 300);
    } else {
      document.getElementById("b2").style.backgroundColor = "#ffffff";
      document.getElementById("b2").style.color = "#ff4d4f";
      setTimeout(() => {
        document.getElementById("b2").style.backgroundColor = "#ff4d4f";
        document.getElementById("b2").style.color = "#ffffff";
      }, 300);
    }
    updateLikes(likes + 1, is);
  };

  const regularApi = () => {
    document.getElementById("b3").style.backgroundColor = "#ffffff";
    document.getElementById("b3").style.color = "#1890ff";
    setTimeout(() => {
      document.getElementById("b3").style.backgroundColor = "transparent";
      document.getElementById("b3").style.color = "#ffffff";
    }, 300);
    setTimeout(() => {
      updateRegularState(regulareState + 1);
      message.success({
        content: "Api successfull!",
        duration: 2,
      });
    }, 2000);
  };
  return (
    <>
      <p className="desc"></p>
      <div className="App">
        <div>
          <div className="post">
            Random post that shows how Optimistic UI works. please be optimistic
            😊
          </div>
          <div className="like">
            <Button
              id="b1"
              type="primary"
              onClick={() => optimisticApi(true, "b1")}
            >
              👍 <strong>{` Optimistic state likes: ${likes}`}</strong>
            </Button>
            <br />
            <Button
              id="b2"
              type="danger"
              onClick={() => optimisticApi(false, "b2")}
            >
              👍 <strong>{` Optimistic state likes: ${likes}`}</strong>
            </Button>
            <br />
            <Button id="b3" type="ghost" onClick={() => regularApi()}>
              👍 <strong>{` Regular state likes: ${regulareState}`}</strong>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
