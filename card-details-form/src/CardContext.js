import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [showInputError, setShowInputError] = useState(false);
  const [showNumberError, setShowNumberError] = useState(false);
  const [showMonthError, setShowMonthError] = useState(false);
  const [showYearError, setShowYearError] = useState(false);
  const [showCvcError, setShowCvcError] = useState(false);


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
        showInputError,
        setShowInputError,
        showNumberError,
        setShowNumberError,
        showMonthError,
        setShowMonthError,
        showYearError,
        setShowYearError,
        showCvcError,
        setShowCvcError,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
