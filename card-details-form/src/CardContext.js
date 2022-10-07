import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [name, setName] = useState("");

  const inputValue = (e) => {
    setName(e.target.value);
  };

  return (
    <CardContext.Provider value={{ name, inputValue }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
