import React, { useState } from "react";
import { data } from "./SpeakerData";
import Header from './Header/Header'
import Toolbar from "./Toolbar/Toolbar";
import styled from "styled-components";

const Container = styled.section`
    max-width: 100%;
    margin: 0 auto;
`

const App = () => {

    

    return (
       <Container>
         <Header/>
         <Toolbar/>
         {data.map(function (speaker) {
            const {id, bio, first, last, favorite, twitterHandle, company, session} = speaker;
            return(
                <div>
                    <img src={`/assets/speaker-${id}.jpg`}></img>
                    <h3>{first}{last}</h3>
                    <p>{bio} {company} {favorite}</p>
                </div>
            )
         })}
        
       </Container>       
  );
}

export default App;