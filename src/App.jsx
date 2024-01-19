import { useSelector, useDispatch } from "react-redux";
import { useState, useId } from "react";
import { ScreenSize } from "./components";

import "./App.css";

function App() {
  const formId = useId();
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formValues);
  };

  return (
    <>
      <ScreenSize />
      <details>
        <summary>Details</summary>
        <form
          id={formId}
          className="form"
          name="contactForm"
          onSubmit={onSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            placeholder="Add name"
            name="name"
            value={formValues.name}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Add surname"
            name="surname"
            value={formValues.surname}
          />
          <input
            onChange={handleChange}
            type="number"
            placeholder="Add phone number"
            name="phoneNumber"
            value={formValues.phoneNumber}
          />
          <button type="submit" className="btn" form={formId}>
            Send
          </button>
        </form>
      </details>
    </>
  );
}

export default App;
