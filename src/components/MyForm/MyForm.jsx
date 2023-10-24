import { useState } from "react";

export const MyForm = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState();

  const handleChange = (event) => setValue(event.target.value.toUpperCase());
  const handleChangeCheckbox = (event) => setChecked(event.target.checked);

  const handleSubmit = () => console.log("send");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={value} onChange={handleChange}></input>
        <label>Description:</label>
        <textarea value="test" onChange={handleChange} />
        <input type="submit" value="Отправить" />
        <select>
          <option value="js">JS</option>
          <option value="react">React</option>
          <option selected value="ts">
            TS
          </option>
        </select>
        <input type="checkbox" onChange={handleChangeCheckbox} />
        <input type="file" />
      </form>
      <p>value: {value}</p>
    </>
  );
};
