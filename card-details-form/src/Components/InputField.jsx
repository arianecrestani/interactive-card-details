import styled from "styled-components";

export default function InputField({label, inputName}) {
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

  const Label = styled.label``;

  return (
    <div>
      <Label>{label}</Label>
      <InputName placeholder={inputName} />
    </div>
  );
}
