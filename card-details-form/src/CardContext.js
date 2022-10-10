import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <CardContext.Provider value={{ name, setName }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
