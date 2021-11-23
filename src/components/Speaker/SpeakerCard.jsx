import styled from "styled-components";
import { data } from "../Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faStar } from '@fortawesome/free-solid-svg-icons'

const ContainerStyle = styled.div`
    max-width: max(1000px, 100% - 100px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
    color: ${({ theme }) => (theme === "light" ? "black" : "#f8f8f8")};
`
const SpeakerCards = styled.div`
    width: 300px;
    
    min-height: 550px;
    margin: 25px 0 0;
    border: 1px solid ${({ theme }) => theme === "light" ? "#e6e6e6" : "#575757"};
    border-radius: 2px;
    padding: 1.5em 1.5em 1em;  
`
const SpeakerStyle = styled.div`
    height: 100%;
    position: relative;
    
    img{
        width: 100%;
        height: 350px;
    }

    p{
       margin: 5px 0;
       font-size: 25px;
       font-weight: bold; 
    }

    h3, h4, h6{
        margin: 0;
        font-weight: normal;
        color: #8f8d8d;
    }

    h5{
        margin: 0.5em 0;
    }
`
const CompanyDetails = styled.div`
    margin: 0.5em 0;
    display: flex;
    justify-content: flex-start;

    aside{
        display:flex; 
        align-items: center;
        margin: .5em 0;
    
        a{
            width: 30px;
            height: 30px;
            border: 1px solid lightblue;
            border-radius: 10em;
        }

        div{
            padding: 0 .8em 0 .4em;
            display: flex;
            flex-direction: column;
            align-content: flex-end;

        }
    }
`
const FavoriteStyle = styled.div`
    margin: 0.5em 0 1em; 

    a{
        display: flex;
        align-items: center;
        color: lightblue;

        h4{
            margin-left: 5px;
        }

        :active{
            color: orange;
        }
    }
`
const SessionListStyle = styled.div`
    width: 280px;
    min-height: 75px;
    padding: .5em;
    border-radius: 3px;
    background-color: #f8f8f8;
    color: ${({ theme }) => theme === "light" ? "#e6e6e6" : "#575757"};

    p{
       margin: .2em 0;
       font-size: 17px;
       font-weight: normal;
       
    }
`

const SpeakerContainer = ({theme, showSessions}) => {
 
    return(
        <ContainerStyle theme={theme}>       
                {data.map(function (speaker) {
                    return  <SpeakerCards theme={theme}><Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}/></SpeakerCards>;
                })}   
        </ContainerStyle>
    )
}

const Speaker = ({speaker, showSessions,theme}) => {
    const { id, first, last, favorite, sessions} = speaker;  
    return ( 
         <SpeakerStyle>
            <section>
                <div>
                    <img src={`/assets/speaker-${id}.jpg`} alt={`${first} ${last}`}/>
                    <p>{first} {last}</p>
                </div> 

                <FavoriteFunctionality favorite={favorite}/>
                <SpeakerDetails {...speaker}/> 
            </section>
            {showSessions === true ? <Sessions sessions={sessions} /> : null}
         </SpeakerStyle>        
    )
}

const SpeakerDetails = ({bio, company, twitterHandle}) => {
return (
        <section>
            <h4 style={{minHeight: '70px'}}>{bio}</h4>
            <CompanyDetails>
                <aside>
                    <a><FontAwesomeIcon icon={faBuilding} style={{fontSize: "20px", color: "lightblue", margin: "5px 0 0 6px"}}/></a>
                    <div>
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                </aside>
                <aside>
                    <a><FontAwesomeIcon icon={faBuilding} style={{fontSize: "20px", color: "lightblue", margin: "5px 0 0 6px"}}/></a>
                    <div>
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </aside>
            </CompanyDetails>           
        </section>
    )
}

const FavoriteFunctionality = () => {
    return(
        <FavoriteStyle>
            <a><FontAwesomeIcon icon={faStar}/><h4>Favorite</h4> </a> 
        </FavoriteStyle>
    )
}

const Sessions = ({sessions, theme}) => {
    return(
        <SessionListStyle theme={theme}><Session session = {sessions[0]}/></SessionListStyle>
    )
}

const Session = ({session}) => {
    const {title, room} = session;
    return (
        <div> {title} <p>Room: {room.name}</p> </div>
    )
}

export default SpeakerContainer;