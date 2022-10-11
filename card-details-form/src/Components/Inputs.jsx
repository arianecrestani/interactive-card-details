import styled from "styled-components";
import InputField from "./InputField";
import { useContext } from "react";
import CardContext from "../CardContext";
import { useEffect } from "react";

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50%;
  font-family: "Space Grotesk";
`;

const SecondSection = styled.div`
  gap: 5px;
  display: flex;
  margin-top: 15px;
  flex-direction: row;
`;

const Button = styled.button`
  margin-top: 2rem;
  width: 381px;
  height: 53px;
  border-radius: 8px;
  background: #21092f;
  color: #ffffff;
`;
export default function Inputs() {
  const {
    name,
    number,
    // month,
    // year,
    // cvc,
    setName,
    setNumber,
    setMonth,
    setYear,
    setCvc,
    showInputError,
    setShowInputError,
  } = useContext(CardContext);

  useEffect(() => {
    if (name.length > 24) {
      setShowInputError(true);
    } else {
      setShowInputError(false);
    }
  }, [name])

  // useEffect(() => {
  //   if (number.length > 16) {
  //     setNumber("");
  //   }
  // }, [number]);

  // const inputMonthHandler = () => {
  //   if (month.length > 3) {
  //     setMonth("");
  //   }
  // };
  // const inputYearHandler = () => {
  //   if (year.length > 3) {
  //     setYear("");
  //   }
  // };
  // const inputCvcHandler = () => {
  //   if (cvc.length > 3) {
  //     setCvc("");
  //   }
  // };

  return (
    <div>
      <FirstSection>
        <InputField
          showInputError={showInputError}
          label="CARDHOLDER NAME"
          inputName="e.g. Jane Appleseed"
          onChange={(e) => {
            setName(e.target.value.replace(/[^a-zA-Z]/g, "").trim());
          }}
        />
        <InputField
          label="CARD NUMBER"
          inputName="e.g. 1234 5678 9123 0000"
          onChange={(e) => {
            setNumber(
              e.target.value
                // .replace(/\D+/g, "")
                // .replace(/(.{4})/g, "$1 ")
                // .trim()
            );
          }}
        />
      </FirstSection>
      <SecondSection>
        <InputField
          inputwidth="80px"
          label="EXP. DATE"
          inputName="MM"
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
        <InputField
          inputwidth="80px"
          inputName="YY"
          label="(MM /YY)"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <InputField
          inputwidth="191px"
          label="CVC"
          inputName="e.g. 123"
          onChange={(e) => {
            setCvc(e.target.value);
          }}
        />
      </SecondSection>
      <Button>Confirm</Button>
    </div>
  );
}
