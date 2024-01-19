import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" placeholder="Add name" name="name" />
      <input type="text" placeholder="Add surname" name="surname" />
      <input type="text" placeholder="Add phone number" name="phoneNumber" />
      <button className="btn">send</button>
    </form>
  );
}
