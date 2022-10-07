import styled from "styled-components";
import CardContext from "../CardContext";
import { useContext } from "react";

const InputName = styled.input`
  width: ${(props) => props.inputwidth || "380px"};
  height: 45px;
  font-family: "Space Grotesk";
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  border-color: #dfdee0;
`;

const Label = styled.label`
  display: flex;
`;
export default function InputField({ label, inputName, inputwidth }) {
  const { inputValue } = useContext(CardContext);

  return (
    <div>
      <Label>{label}</Label>
      <InputName
        onChange={inputValue}
        placeholder={inputName}
        inputwidth={inputwidth}
      />
    </div>
  );
}
