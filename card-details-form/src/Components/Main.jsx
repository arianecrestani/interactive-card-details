import styled from "styled-components";


export default function Main() {
  let BgMainImage = require("../images/bg-main-desktop.png");

  const Main = styled.img`
    width: 100%;
    height: 100%;
    margin: 0px;
  `;

  return (
      <div>
        <Main alt="main" src={BgMainImage} />
      </div>
  );
}
