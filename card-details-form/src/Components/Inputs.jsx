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
  `;
  const InputNumber = styled(InputName)``;

  const InputDate = styled.input`
    width: 80px;
    height: 45px;

  `;
  const InputCvc = styled.input`
    width: 191px;
    height: 45px;
    radius: 8px;
  `;

  return (
    <div>
      <Div>
        <InputName />
        <InputNumber />
      </Div>
      <div>
        <InputDate />
        <InputDate />
        <InputCvc/>
      </div>
    </div>
  );
}
