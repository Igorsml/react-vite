import { useLocalStorage } from "../../hooks/UseLocalStorage/UseLocalStorage";
import { Dogs } from "../Dogs/Dogs";
import { dogsList } from "../Dogs/DogsList";

export const DogsOrder = () => {
  const key = "orders";

  const [order, setOrder] = useLocalStorage([], key);

  const value = `, ${order.map((item) => item.name)}`;

  const addToOrder = (id) => {
    const newItem = dogsList.find((item) => item.id === id);

    setOrder([...order, newItem]);
  };

  const handleClear = () => {
    setOrder([]);
  };

  return (
    <>
      <h2>useLocalStorage</h2>
      <div style={{ display: "flex" }}>value from LS: {value}</div>
      <button onClick={handleClear}>Clear LS</button>
      <Dogs dogsList={dogsList} addToOrder={addToOrder} />;
    </>
  );
};
