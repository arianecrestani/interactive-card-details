import styled from "styled-components";
import InputField from "./InputField";
import { useState, useContext } from "react";
import CardContext from "../CardContext";

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
  const { setName } = useContext(CardContext);

  return (
    <div>
      <FirstSection>
        <InputField
          label="CARDHOLDER NAME"
          inputName="e.g. Jane Appleseed"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputField label="CARD NUMBER" inputName="e.g. 1234 5678 9123 0000" />
      </FirstSection>
      <SecondSection>
        <InputField inputwidth="80px" label="EXP. DATE" inputName="MM" />
        <InputField inputwidth="80px" inputName="YY" label="(MM /YY)" />
        <InputField inputwidth="191px" label="CVC" inputName="e.g. 123" />
      </SecondSection>
      <Button>Confirm</Button>
    </div>
  );
}
