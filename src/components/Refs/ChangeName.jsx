import { useState, useRef, useEffect } from "react";

export const ChangeName = (props) => {
  const [name, setName] = useState("Initial");
  const nameRef = useRef(name);

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName !== null) {
      setName(userName);
    }

    return () => {
      console.log(nameRef.current);
      localStorage.setItem("userName", nameRef.current);
    };
  }, []);

  const changeName = (event) => setName(event.target.value);

  return (
    <div>
      <h3>Имя: {name}</h3>

      <div>
        <p>
          Имя: <input type="text" value={name} onChange={changeName} />
        </p>
        <button onClick={props.unmountComponent}>Unmount</button>
      </div>
    </div>
  );
};
