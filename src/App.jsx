import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useId, useTransition } from "react";
import { ScreenSize, Comments } from "./components";

import "./App.css";

const filterBySearch = (entities, search) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

function App() {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  const handleSearch = (e) => {
    // startTransition(() => {
    //   setSearch(e.target.value);
    // });
    setSearch(e.target.value);
  };

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
      <ol>
        <li>useTransition</li>
        <li>useDeferredValue</li>
        <input onChange={handleSearch} />
        <h1>{isPending && "Rendering"}</h1>
        <Comments entities={filterBySearch(comments, search)} />
        <li>useImperativeHandle</li>
        <li>useInsertionEffect</li>
        <li>useOptimistic</li>
      </ol>
      <details>
        <summary>Details</summary>
        <ScreenSize />
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
