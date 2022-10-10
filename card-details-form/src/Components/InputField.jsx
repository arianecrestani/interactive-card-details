import styled from "styled-components";
import Inputs from "./Inputs";

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
export default function InputField({ label, inputName, inputwidth, onChange }) {
  return (
    <div>
      <Label>{label}</Label>
      <InputName
        onChange={onChange}
        placeholder={inputName}
        inputwidth={inputwidth}
      />
    </div>
  );
}
