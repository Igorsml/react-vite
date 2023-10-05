import { useLocalStorage } from "../../hooks/UseLocalStorage/UseLocalStorage";
import { Dogs } from "../Dogs/Dogs";
import { dogsList } from "../Dogs/DogsList";

export const DogsOrder = () => {
  const [order, setOrder] = useLocalStorage([], "order");

  const addToOrder = (id) => {
    const newItem = dogsList.find((item) => item.id === id);

    setOrder([...order, newItem]);
  };

  return <Dogs dogsList={dogsList} addToOrder={addToOrder} />;
};
