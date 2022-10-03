import "./App.css";
import styled from "styled-components";
import Cards from './Components/Cards'
import Main from './Components/Main'
import Inputs from './Components/Inputs'


export default function App() {
let BgMainImage = require("./images/bg-main-desktop.png");

  const Container = styled.div`
    display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: repeat(3, 1fr);
  `;



  return (
    <Container>
      <Main/>
      <Cards />
      <Inputs/>
    </Container>
  );
}
