import "./App.css";
import styled from "styled-components";
import Cards from './Components/Cards'
import Main from './Components/Main'
import Inputs from './Components/Inputs'
import { CardProvider } from "./CardContext";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 1fr 0.8fr 1fr;
`;


export default function App() {
  


  return (
    
    <Container>
      <CardProvider>
        <Main />
        <Cards />
        <Inputs />
        </CardProvider>
      </Container>
  );
}
