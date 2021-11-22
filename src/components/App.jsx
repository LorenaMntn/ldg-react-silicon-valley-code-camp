import { useState } from 'react';
import Header from './Header/Header'
import SpeakerToolbar from "./Toolbar/SpeakerToolbar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const Container = styled.section`
    max-width: 100%;
    margin: 0 auto;    
`

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme === "light" ? "#ffffff" : "#242424"};
  }
`;
  
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Container>
      <GlobalStyles theme={theme} />
      <Header theme={theme} />
      <SpeakerToolbar  theme={theme} setTheme={setTheme} />
    </Container>
  );
}

export default App;
