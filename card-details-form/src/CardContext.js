import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

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
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
