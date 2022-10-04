
import styled from "styled-components";

export default function Cards() {
  let BgCardFront = require("../images/bg-card-front.png");
  let BgCardBack = require("../images/bg-card-back.png");

  const CardFront = styled.img`
    position: relative;
    width: 447px;
    height: 245px;
    margin-left: -45%;
  `;
  const CardBack = styled.img`
    width: 447px;
    height: 245px;
    margin-left: -30%;
  `;
  const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: 50%;
    gap: 2rem;
  `;
  const LabelNumber = styled.label`
  `;
  const LabelName = styled(LabelNumber)`
  `;
  const cardDataNumber = `0000 0000 0000`;
  const cardDataName = `Ariane Crestani`
  

  return (
    <CardDiv>
      <div>
        <CardFront alt="cardFront" src={BgCardFront} />
        <LabelNumber>{cardDataNumber}</LabelNumber>
        <LabelName>{cardDataName}</LabelName>
      </div>
      <CardBack alt="cardBack" src={BgCardBack} />
    </CardDiv>
  );
}
