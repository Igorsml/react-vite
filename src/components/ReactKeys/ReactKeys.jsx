import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comment } from "./Comment";
import { Article } from "./Article";

const listThemes = [
  { title: "createElement" },
  { title: "isValidElement" },
  { title: "getSalary" },
];

export const ReactKeys = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_start=0&_limit=2")
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} value={comment} />
        ))}
      </div>
      <h2>Index</h2>
      {listThemes.map((theme) => (
        <Article key={theme.id} theme={theme} />
      ))}

      <h2>Pre + Date + Time</h2>
      {listThemes.map((theme, index) => (
        <Article dateKey={generateKey(theme.title)} theme={theme} />
      ))}
    </div>
  );
};
