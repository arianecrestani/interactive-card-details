import styled from "styled-components";

const InputName = styled.input`
  width: ${(props) => props.inputwidth || "377px"};
  border-radius: 0.5rem;
  height: 45px;
  border: 1px solid hsl(270deg, 3%, 87%);
  font-family: "Space Grotesk", sans-serif;
  border-radius: 8px;
  font-style: normal;
  ::placeholder {
        color: $Dark-grayish-violet;
        opacity: 1;92f ;
  }
  font-weight: 500;
  font-size: 18px;
  border-color: ${(props) => (props.error ? "red" : "#dfdee0")};
`;
const Label = styled.label`
  display: flex;
  color: #21092f;

`;
const Error = styled.label`
  visibility: ${(props) => props.visibilityLabel || "hidden"};
  display: flex;
  color: red;
  gab:2px
  font-size: 0.75rem;
  // margin-top: 0.25rem;
`;

export default function InputField({
  label,
  inputName,
  inputwidth,
  onChange,
  showError,
  errorDescription,
  maxLength,
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
