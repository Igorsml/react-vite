import React, { useState, useEffect, useDebugValue } from "react";

// Функция для имитации запроса к API
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("https://jsonplaceholder.typicode.com/todos/1");
    }, 5000);
  });
};

// Пользовательский хук для загрузки данных
function useDataLoader() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // Использование useDebugValue для отображения статуса загрузки
  useDebugValue(isLoading ? "Загрузка данных..." : "Данные загружены");

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
      setLoading(false);
    });
  }, []);

  return data;
}

// Компонент, использующий пользовательский хук
export function MyComponent() {
  const data = useDataLoader();

  return (
    <div>{data ? <p>Полученные данные: {data}</p> : <p>Загрузка...</p>}</div>
  );
}
