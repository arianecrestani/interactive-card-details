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
  width: 381px;
  height: 53px;
  border-radius: 8px;
  background: #21092f;
  color: #ffffff;
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

  useEffect(() => {
    if (name.length > 24 || name.length < 1) {
      setShowInputError(true);
    } else {
      setShowInputError(false);
    }
  }, [name]);

  useEffect(() => {
    if (number.length > 19) {
      setShowNumberError(true);
    } else {
      setShowNumberError(false);
    }
  }, [number]);

  useEffect(() => {
    if (month.length <= 0 || month < 1 || month > 12) {
      setShowMonthError(true);
    } else {
      setShowMonthError(false);
    }
  }, [month]);

  useEffect(() => {
    let currentYear = new Date().getFullYear();
    currentYear = currentYear.toString().substring(2);

    if (year.length < 0 || year < currentYear) {
      setShowYearError(true);
    } else {
      setShowYearError(false);
    }
  }, [year]);

  useEffect(() => {
    setShowCvcError(cvc.length !== 3);
  }, [cvc]);

  const onConfirm = (e) => {
    e.preventDefault();
    if (
      !showInputError &&
      !showNumberError &&
      !showMonthError &&
      !showYearError &&
      !showCvcError
    ) {
      setFollowUp(true);
    }
    if (followUp) {
      setName("")
      setNumber("")
      setMonth("")
      setYear("")
      setCvc("")
      setFollowUp(false)
    }

    // quando todos os inputs estivem preenchidos ai vai mostrar uma nova ui, e se cada input nao tiver de acordo vai mostar um label errror
  };
  const removeLetters = (value) => {
    return value.replace(/\D+/g, "");
  };

  return (
    <div>
      {!followUp && (
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
      )}
      {followUp && (
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
