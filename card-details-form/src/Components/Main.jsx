import styled from "styled-components";


const ImageMain = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  @media (max-width: 450px) {
    width: 391px;
    height: 260px;
  }
`;

export default function Main() {
  let BgMainImage = require("../images/bg-main-desktop.png");



  return (
    <div>
      <ImageMain alt="main" src={BgMainImage} />
    </div>
  );
}
