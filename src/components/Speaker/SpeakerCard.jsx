import styled from "styled-components";
import { data } from "../SpeakerData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBuilding } from '@fortawesome/free-solid-svg-icons'

const ContainerStyle = styled.div`
    max-width: max(1000px, 100% - 100px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
`
const SpeakerCards = styled.div`
    width: 300px;
    margin: 25px 0 0;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    padding: 1.5em 1.5em 1em;  
`
const SpeakerStyle = styled.div`
    img{
        width: 100%;
        height: 280px;
    }

    p{
       margin: 5px;
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
    display:flex; 
    align-items: center;
    margin: 0.5em 0 1em; 
    a{
        margin-right: 10px;
    }
`
const SessionListStyle = styled.div`
    width: 280px;
    padding: .5em;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    background-color: #e0e0e0;

    p{
       margin: .2em 0;
       font-size: 17px;
       font-weight: normal;
    }
`


const SpeakerContainer = () => {
    return(
        <ContainerStyle>       
                {data.map(function (speaker) {
                    return  <SpeakerCards><Speaker key={speaker.id} speaker={speaker} /></SpeakerCards>;
                })}   
        </ContainerStyle>
    )
}

const Speaker = ({speaker}) => {
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
            <SessionList sessions={sessions}/> 
         </SpeakerStyle>        
    )
}

const SpeakerDetails = ({bio, company, twitterHandle}) => {
return (
        <section>
            <h4>{bio}</h4>
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
            <a><FontAwesomeIcon icon={[ faStar]}/></a>
            <h4>Favorite</h4>
        </FavoriteStyle>
    )
}

const SessionList = ({sessions}) => {
    return(
        <SessionListStyle><Session session = {sessions[0]}/></SessionListStyle>
    )
}

const Session = ({session}) => {
    const {title, room} = session;
    return (
        <div> {title} <p>Room: {room.name}</p> </div>
    )
}

export default SpeakerContainer;