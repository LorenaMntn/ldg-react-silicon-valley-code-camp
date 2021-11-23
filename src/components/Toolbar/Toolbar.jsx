import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const WhiteVsDarkTheme = ({ theme }) => theme === "light" ? "#e6e6e6" : "#575757";
const ToDarkTheme = ({ theme }) => theme === "light" ? "" : "#e6e6e6";


const Container = styled.section`
  border-top: 0.1em solid ${WhiteVsDarkTheme};
  border-bottom: 0.1em solid ${WhiteVsDarkTheme};
`
const Wrapper = styled.div`
    max-width: max(1000px, 100% - 100px);
    margin: 0 auto;
    display: flex;   
    color: ${ToDarkTheme}
`
const YearContainer = styled.div`
      display:flex;
      flex-direction: row;
      padding: 0.5em 0;

      p{
          margin-left: 2em;
          padding-right: 1em;
          font-weight: bold;
      }

      select{
        height: 30px;
        margin: 0.8em 2em 0 0;
        padding: 0 1.2em;
        border: 1px solid #e6e6e6;
        border-radius: 2px;
      }
`
const ToolbarContainerStyle = styled.div`
   border-left: 0.1em solid ${({ theme }) => theme === "light" ? "#e6e6e6" : "#575757"};
   display: flex;
   align-items: center;

   p{
      margin-left: 2em;
      padding-right: 1em;
      font-weight: bold;
   }
`
const SessionToggleContainer = styled.label`

    .control {
        position: relative;
        display: inline-block;
        width: 65px;
        height: 30px;

        input {
            height: 0;

            &:checked + .switch {
                 background-color: #51b5b1;
            }
         }
    }

    .switch {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #949494;
        transition: transform 0.2s linear;
        border-radius: 25px;

            &::before {
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            transition: transform 0.2s linear;
            border-radius: 50%;
        }
    }

    input:checked + .switch:before {
        transform: translateX(33px);
    }
}
`
const FavoriteContainerStyle = styled.div`
        display: flex;
        align-items: center;

      p{
          margin-left: 4em;
          padding-right: 1em;
          font-weight: bold;
      }
`
const ThemeContainerStyle = styled.div`
      display:flex;
      padding: 0.5em 0;

      p{
          margin-left: 2em;
          padding-right: 1em;
          font-weight: bold;
      }

      select{
        height: 30px;
        margin: 0.8em 2em 0 0;
        padding: 0 1.2em;
        border: 1px solid #e6e6e6;
        border-radius: 2.5px;
      }
`
const SearchContainerStyle = styled.div` 
    display:flex;
    align-items: center;  
    padding: 0.5em 0;

    input{
        height: 2.3em;
        width: 15em;
        border: 1px solid #e6e6e6;
        border-radius: 2.5px 0 0 2.5px;

        :focus {
            cursor:pointer;
            outline: #8f8d8d;
        }
    }

    button{
        height: 2.6em;
        padding: 0 1em;
        border: none;
        border-radius: 0 2.5px 2.5px 0;
        background-color: #787777;
        color: #ffff;

        :active{
            cursor:pointer;
            background-color: #8f8d8d;
        }
    }
`
const Toolbar = ({ theme, setTheme, eventYear, setEventYear, showSessions, setShowSessions}) => {
       return (
        <Container theme={theme}>
          <Wrapper theme={theme}>
            <YearContainer >
                <p>Year</p>
                <select id="year" name="year" value={eventYear}>
                    <option>2019</option>
                </select>
            </YearContainer>
            <SessionsContainer 
                 theme={theme}
                 showSessions={showSessions}
                 setShowSessions={setShowSessions}
            />   
           </Wrapper> 

           <Wrapper  theme={theme} style={{display:"flex", justifyContent: "space-between", borderTop:"1px solid #e6e6e6"}}>
              <FavoriteContainer />
              <ThemeContainer theme={theme} setTheme={setTheme}/>
              <SearchContainer/>
           </Wrapper> 
        </Container>
    )
}

function SessionsContainer({theme, showSessions, setShowSessions}) {
    return (
      <ToolbarContainerStyle theme={theme}>
        <p>Show Sessions</p>
         <SessionToggleContainer theme={theme}>
          <div className="control">
          <label>
            <input
                  type="checkbox"
                    checked={showSessions}
                    onClick={e => setShowSessions(e.target.checked)}
                  />
                <span className="switch"></span>
            </label>
           </div> 
         </SessionToggleContainer>     
      </ToolbarContainerStyle>
    );
}
  
function FavoriteContainer(){
    return (
    <FavoriteContainerStyle>
        <p>Favorite List</p>
         <SessionToggleContainer>
            <div className="control">
                <input
                    type="checkbox"
                />
                <span className="switch"></span>
            </div>
         </SessionToggleContainer> 
    </FavoriteContainerStyle>
  )    
}

function ThemeContainer({theme, setTheme}){
    return(
       <ThemeContainerStyle>
            <p>Theme</p>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
       </ThemeContainerStyle>
    )
}

function SearchContainer({theme}) {
    return (
      <SearchContainerStyle >
        <input
          type="text"
          placeholder="Search..."></input>
        <button theme={theme}><FontAwesomeIcon icon={faSearch} /></button>
      </SearchContainerStyle>
    );
}

export default Toolbar;