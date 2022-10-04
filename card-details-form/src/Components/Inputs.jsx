import styled from "styled-components";
import InputField from "../Components/InputField";

export default function Inputs() {
  const FirstSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 60%;
    font-family: "Space Grotesk";
  `;

  const SecondSection = styled.div`
    gap: 6px;
    display: flex;
    margin-top: 4px;
  `;
  // const InputDate = styled.input`
  //   width: 80px;
  //   height: 45px;
  //   border-radius: 8px;
  //   border-color: #dfdee0;
  // `;
  // const InputCvc = styled.input`
  //   width: 191px;
  //   height: 45px;
  //   border-radius: 8px;
  //   border-color: #dfdee0;
  // `;
  const Button = styled.button`
    margin-top: 2rem;
    width: 381px;
    height: 53px;
    border-radius: 8px;
    background: #21092f;
    color: #ffffff;
  `;


  return (
    <div>
      <FirstSection>
        <InputField label="Cardholder Name" inputName="e.g. Jane Appleseed" />
        <InputField label="Card Number" inputName="e.g. 1234 5678 9123 0000" />
      </FirstSection>
      <SecondSection>
        <div>
          <InputField inputwidth='80px' label="Exp. Date (MM/YY)" inputName="MM" />
          <InputField inputName="YY" />
        </div>
        <div>
          <InputField label="cvc" inputName="e.g. 123" />
        </div>
      </SecondSection>
      <Button>Confirm</Button>
    </div>
  );
}
