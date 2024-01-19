import { useCallback, useEffect, useState } from "react";

export const CbAndUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = () => setCounter(counter + 1);
  const handleRandom = () => setRandomNumber(Math.floor(Math.random() * 10));
  const handleResetCounter = () => {
    setCounter(0);
    setRandomNumber(0);
  };
  const logUpdate = () => console.log("now is:", { counter });

  useEffect(() => {
    if (counter) {
      logUpdate();
    }
  }, [counter]);

  return (
    <>
      <p>Value: {counter}</p>
      <button onClick={handleClick}>Click </button>
      <p>randomNumber: {randomNumber}</p>
      <button onClick={handleRandom}>Random </button>
      <button onClick={handleResetCounter}>Reset</button>
    </>
  );
};
