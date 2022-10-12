import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [showNameInputError, setShowInputError] = useState(false);
  const [showNumberInputError, setShowNumberInputError] = useState(false);

  return (
    <CardContext.Provider
      value={{
        name,
        setName,
        number,
        setNumber,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
        showNameInputError,
        setShowInputError,
        showNumberInputError,
        setShowNumberInputError,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
