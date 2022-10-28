import styled from "styled-components";
import InputField from "./InputField";
import { useContext } from "react";
import CardContext from "../CardContext";
import { useEffect, useState } from "react";

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 50%;
  font-family: "Space Grotesk";
`;

const SecondSection = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  gap: 5px;
  display: flex;
  margin-top: 15px;
`;

const Button = styled.button`
  display: flex;
  margin-top: 2rem;
  width: 390px;
  height: 53px;
  border-radius: 8px;
  background: #21092f;
  color: #ffffff;
  font-size: 20px;
  align-items: center;
`;
const Updated = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50%;
`;
const ImageUpadte = styled.img``;
export default function Inputs() {
  const [showInputError, setShowInputError] = useState(false);
  const [showNumberError, setShowNumberError] = useState(false);
  const [showMonthError, setShowMonthError] = useState(false);
  const [showYearError, setShowYearError] = useState(false);
  const [showCvcError, setShowCvcError] = useState(false);
  const [followUp, setFollowUp] = useState(false);

  const {
    name,
    number,
    month,
    year,
    cvc,
    setName,
    setNumber,
    setMonth,
    setYear,
    setCvc,
  } = useContext(CardContext);

  const errorBlank = `Can't be blank`;
  const errorFormat = ` Wrong format,numbers only`;
  const removeLetters = (value) => {
    return value.replace(/\D+/g, "");
  };

  const checkInputName = () => {
    if (name.length > 24 || name.length < 1) {
      setShowInputError(true);
      console.log("checkInputName true");
      return true;
    } else {
      setShowInputError(false);
      return false;
    }
  };
  const checkInputNumber = () => {
    if (number.length < 19) {
      setShowNumberError(true);
      return true;
    } else {
      setShowNumberError(false);
      return false;
    }
  };
  const checkInputMonth = () => {
    if (month.length <= 0 || month < 1 || month > 12) {
      setShowMonthError(true);
      return true;
    } else {
      setShowMonthError(false);
      return false;
    }
  };
  const checkInputYear = () => {
    let currentYear = new Date().getFullYear();
    currentYear = currentYear.toString().substring(2);
    if (year.length < 0 || year < currentYear) {
      setShowYearError(true);
      return true;
    } else {
      setShowYearError(false);
      return false;
    }
  };
  const checkInputCvc = () => {
    if (cvc.length !== 3) {
      setShowCvcError(true);
      return true;
    } else {
      setShowCvcError(false);
      return false;
    }
  };

  const onConfirm = () => {
    if (
      !checkInputName() &&
      !checkInputNumber() &&
      !checkInputMonth() &&
      !checkInputYear() &&
      !checkInputCvc() 
    ) {
      setFollowUp(true);
    } else {
      setFollowUp(false);
    }
    if (!followUp) {
      setName("");
      setNumber("");
      setMonth("");
      setYear("");
      setCvc("");
    }
  };

  return (
    <div>
      {!followUp ? (
        <>
          <FirstSection>
            <InputField
              errorDescription={errorBlank}
              maxLength={24}
              showError={showInputError}
              label="CARDHOLDER NAME"
              inputName="e.g. Jane Appleseed"
              onChange={(e) => {
                setName(
                  (e.target.value = e.target.value.replace(/[^a-zA-Z' ']/g, ""))
                );
              }}
            />
            <InputField
              errorDescription={errorFormat}
              maxLength={19}
              label="CARD NUMBER"
              showError={showNumberError}
              inputName="e.g. 1234 5678 9123 0000"
              onChange={(e) => {
                setNumber(
                  (e.target.value = e.target.value
                    .replace(/\D+/g, "")
                    .replace(/(.{4})/g, "$1 ")
                    .trim())
                );
              }}
            />
          </FirstSection>
          <SecondSection>
            <InputField
              showError={showMonthError}
              errorDescription={errorBlank}
              maxLength={2}
              inputwidth="80px"
              label="EXP. DATE"
              inputName="MM"
              onChange={(e) => {
                setMonth((e.target.value = removeLetters(e.target.value)));
              }}
            />
            <InputField
              maxLength={2}
              errorDescription={errorBlank}
              showError={showYearError}
              inputwidth="80px"
              inputName="YY"
              label="(MM /YY)"
              onChange={(e) => {
                setYear((e.target.value = removeLetters(e.target.value)));
              }}
            />
            <InputField
              errorDescription={errorBlank}
              showError={showCvcError}
              maxLength={3}
              inputwidth="191px"
              label="CVC"
              inputName="e.g. 123"
              onChange={(e) => {
                setCvc((e.target.value = removeLetters(e.target.value)));
              }}
            />
          </SecondSection>
        </>
      ) : (
        <>
          <Updated>Thank you</Updated>
          <ImageUpadte
            alt="main"
            src={require("../images/icon-complete.svg").default}
          />
        </>
      )}
      <Button onClick={onConfirm}>Confirm</Button>
    </div>
  );
}
