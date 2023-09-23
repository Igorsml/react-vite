import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comment } from "./Comment";
import { Article } from "./Article";
import uuid from "react-uuid";

const listThemes = [
  { id: 1, title: "createElement" },
  { id: 2, title: "isValidElement" },
  { id: 3, title: "getSalary" },
];

let length = 0;

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
    <div className="main">
      <div>
        <h2>ID</h2>
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} value={comment} />
          ))}
        </div>
      </div>
      <div>
        <h2>Index</h2>
        {listThemes.map((theme, index) => (
          <Article key={index} indexKey={index} theme={theme} />
        ))}
      </div>
      <div>
        <h2>Pre + Date + Time</h2>
        {listThemes.map((theme) => (
          <Article
            key={generateKey(theme.title)}
            dateKey={generateKey(theme.title)}
            theme={theme}
          />
        ))}
      </div>
      <div>
        <h2>Array length</h2>
        {listThemes.map((theme) => {
          length += 1;
          return <Article key={length} lengthKey={length} theme={theme} />;
        })}
      </div>
      <div>
        <h2>UUID</h2>
        {listThemes.map((theme) => (
          <Article key={uuid()} uuidKey={uuid()} theme={theme} />
        ))}
      </div>
    </div>
  );
};
