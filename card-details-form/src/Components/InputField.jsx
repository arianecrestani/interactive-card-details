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
  border-color: ${(props) => props.error ? "red" : "#dfdee0"};
`;
const Label = styled.label`
  display: flex;
`;
const Error = styled.label`
  visibility: ${(props) => props.visibilityLabel || "hidden"};
  display: flex;
  color: red;
`;

export default function InputField({
  label,
  inputName,
  inputwidth,
  onChange,
  showError,
  errorDescription,
  maxLength
}) {
  return (
    <div>
      <Label>{label}</Label>

      <InputName
        maxLength={maxLength}
        onChange={onChange}
        placeholder={inputName}
        inputwidth={inputwidth}
        error={showError}
      />
      <div>
        <Error visibilityLabel={showError}>{errorDescription}</Error>
      </div>
    </div>
  );
}
