import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [guest, setGuest] = useState(0);

  const value = { guest, city, setCity, setGuest };
  return (
    <SearchContext.Provider value={value}> {children}</SearchContext.Provider>
  );
};
