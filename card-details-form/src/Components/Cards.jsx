
import styled from "styled-components";

export default function Cards() {
  let BgCardFront = require("../images/bg-card-front.png");
  let BgCardBack = require("../images/bg-card-back.png");
  const CardDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: 50%;
    gap:2rem
    
   
    `;
  const CardFront = styled.img`
    display: flex;
    width: 447px;
    display: flex;
    height: 245px;
    margin-left: -250px;
  `;
  const CardBack = styled.img`
    display: flex;
    width: 447px;
    height: 245px;
    margin-left: -100px;
  `;

  const CardDiv2 = styled.div`

  `;
  const Labels = styled.div`
    display: flex;
    flex-direction:column;
 
 
  `;
  const LabelNumber = styled.label`
    margin-top: -120px;
    padding: 5px;
    z-index: auto;
    color: #ffffff;
    font-size: 28px;
    margin-left: -195px;
    letter-spacing: 3.42222px;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
  `;
  const LabelName = styled(LabelNumber)`
    margin-top: -0px;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 18px;
    justify-content: space-around;
  `;
  const LabelDate = styled(LabelName)`
    margin-left: 140px;
  `;
  const LabelCvc = styled.label`
    margin-bottom: -100px;
    z-index: auto;
  `;


  const cardDataNumber = `0000 0000 0000 0000`;
  const cardDataName = `Ariane Crestani`
  const cardDate = `00/00`
  const cardCvc = `000`
  

  return (
    <div>
      <CardDiv1>
        <CardFront alt="cardFront" src={BgCardFront} />
        <Labels>
          <LabelNumber>{cardDataNumber}</LabelNumber>
          <div>
            <LabelName>{cardDataName}</LabelName>
            <LabelDate>{cardDate}</LabelDate>
          </div>
        </Labels>
      </CardDiv1>
      <CardDiv2>
        <LabelCvc>{cardCvc}</LabelCvc>
        <CardBack alt="cardBack" src={BgCardBack} />
      </CardDiv2>
    </div>
  );
}
