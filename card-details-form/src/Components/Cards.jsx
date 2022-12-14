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
    z-index: auto;
    container-type: inline-size;
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
    margin-left: 25px;
    margin-top: -6rem;
    z-index: auto;
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
    margin-left: 95px;
    margin-top: -20rem;
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
  @media (max-width: 450px) {
    font-size: 18px;
    line-height: 28px;
    padding: 8px;
    margin-top: 25px;
    margin-left: 34px;
    letter-spacing: 2px;
  }
`;
const LabelName = styled(LabelNumber)`
  margin-top: -0px;
  letter-spacing: 2px;
  font-size: 14px;
  line-height: 18px;
`;
const LabelDate = styled(LabelName)`
  margin-left: 140px;
  @media (max-width: 450px) {
    margin-left: 70px;
  }
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
  @media (max-width: 450px) {
    margin-top: -114px;
    margin-left: 300px;
  }
`;
const CardLogo = styled.img`
  display: flex;
  width: 85px;
  z-index: 1;
  margin-top: -248px;
  margin-left: -220px;
  height: 50px;
  @media (max-width: 450px) {
    margin-top: -170px;
    margin-left: 39px;
    height: 29px;
    width: 53px;
  }
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
