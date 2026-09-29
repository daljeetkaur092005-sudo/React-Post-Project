import { createContext, useState } from "react";
import { usePost } from "./usePost";

export const MyStore = createContext({});

export const MyContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  const { data } = usePost();

  const addToFav = (id) => {
    const select = data.find((val) => {
      if (val.id === id) return setFav((prev) => [...prev, val]);
    });
  };

  const removeToFav = (id) => {
    setFav((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  return (
    <MyStore.Provider value={{ fav, setFav, addToFav, removeToFav }}>
      {children}
    </MyStore.Provider>
  );
};
