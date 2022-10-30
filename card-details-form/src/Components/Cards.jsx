import styled from "styled-components";
import CardContext from "../CardContext";
import { useContext } from "react";


const CardDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-top: 50%;
  gap: 2rem;
  @media (max-width: 450px) {
    margin-top: 0%;
    gap: 0rem;
    z-index: 1;
  }
`;
const CardFront = styled.img`
  display: flex;
  width: 447px;
  display: flex;
  height: 245px;
  margin-left: -250px;
  @media (max-width: 450px) {
    width: 286px;
    height: 157px;
    margin-left: 0px;
    // margin-left: 10px;
    // margin-top: -27%;
  }
`;
const CardBack = styled.img`
  width: 447px;
  display: flex;
  height: 245px;
  margin-left: -100px;
  @media (max-width: 450px) {
    width: 286px;
    height: 157px;
    // margin-left: 100px;
    // margin-top: -325px;
    margin-left: 0px;
  }
`;

const CardDiv2 = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5%;
  gap: 1rem;
}
`;
const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelNumber = styled.label`
  margin-top: 53px;
  padding: 15px;
  z-index: auto;
  color: #ffffff;
  font-size: 28px;
  margin-left: -220px;
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
`;
const LabelDate = styled(LabelName)`
  margin-left: 140px;
`;
const LabelCvc = styled.label`
  display: flex;
  margin-top: -155px;
  z-index: 1;
  color: #ffff;
  margin-left: 250px;
  letter-spacing: 3.42222px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
`;
const CardLogo = styled.img`
  display: flex;
  width: 70px;
  z-index: 1;
  margin-top: -248px;
  margin-left: -220px;
  height: 50px;
`;

export default function Cards() {
  let BgCardFront = require("../images/bg-card-front.png");
  let BgCardBack = require("../images/bg-card-back.png");
  const cardDataNumber = `0000 0000 0000 0000`;
  let cardDataName = `Jane Appleseed`;
  const cardMonth = `00/`;
  const cardYear = `00`;
  const cardCvc = `000`;

  const { name, number, month, year, cvc } = useContext(CardContext);

  return (
    <div>
      <CardDiv1>
        <CardFront alt="cardFront" src={BgCardFront} />

        <Labels>
          <CardLogo
            alt="main"
            src={require("../images/card-logo.svg").default}
          />
          {number ? (
            <LabelNumber>{number}</LabelNumber>
          ) : (
            <LabelNumber>{cardDataNumber}</LabelNumber>
          )}
          <div>
            {name ? (
              <LabelName>{name}</LabelName>
            ) : (
              <LabelName>{cardDataName}</LabelName>
            )}
            {month || year ? (
              <LabelDate>
                {month}/{year}
              </LabelDate>
            ) : (
              <LabelDate>
                {cardMonth}
                {cardYear}
              </LabelDate>
            )}
          </div>
        </Labels>
      </CardDiv1>
      <CardDiv2>
        <CardBack alt="cardBack" src={BgCardBack} />
        {cvc ? <LabelCvc>{cvc}</LabelCvc> : <LabelCvc>{cardCvc}</LabelCvc>}
      </CardDiv2>
    </div>
  );
}
