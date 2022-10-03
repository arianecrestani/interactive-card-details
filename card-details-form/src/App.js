import "./App.css";
import styled from "styled-components";

export default function App() {
  let BgMainImage = require("./images/bg-main-desktop.png");
  let BgCardFront = require("./images/bg-card-front.png");
  let BgCardBack = require("./images/bg-card-back.png");

  const Container = styled.div`
    display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: repeat(3, 1fr);
  `;
  const Main = styled.img`
    width: 100%;
    height: 100%;
    margin: 0px;
  `;
  const CardFront = styled.img`
    float: left;
    display: flex;
    position: relative;
    z-index: 1;
    margin-left: -38%;
    margin-top: 53%;
  `;
    const CardBack = styled.img`
      position: relative;
      z-index: 1;
      margin-left: -30%;
      margin-top: 89%;
      display: flex;
    `;

  

  return (
    <Container>
      <div>
        <Main alt="main" src={BgMainImage} />
      </div>
      <div>
        <CardFront alt="cardFront" src={BgCardFront} />
        <CardBack alt="cardBack" src={BgCardBack} />
      </div>
    </Container>
  );
}
