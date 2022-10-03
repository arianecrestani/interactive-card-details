import styled from "styled-components";

export default function Inputs() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 50%;
    
  `;
  const InputName = styled.input`
    width: 380px;
    height: 45px;
    top: 24px;
    background: #dfdee0;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  `;
  const InputNumber = styled(InputName)``;

  const InputDate = styled.input`
    width: 80px;
    height: 45px;
    border-radius: 8px;
    
  `;
  const InputCvc = styled.input`
    width: 191px;
    height: 45px;
    border-radius: 8px;
  `;
  const Button = styled.button`
    width: 381px;
    height: 53px;
    border-radius: 8px;
    background: #21092f;
    color: #ffffff;
  `;

  return (
    <div>
      <Div>
        <InputName placeholder="e.g. Ariane Crestani" />
        <InputNumber placeholder="e.g. 1234 5678 9123 0000" />
      </Div>
      <div>
        <InputDate placeholder="MM" />
        <InputDate placeholder="YY" />
        <InputCvc placeholder="e.g. 123" />
      </div>
      <Button>Confirm</Button>
    </div>
  );
}
