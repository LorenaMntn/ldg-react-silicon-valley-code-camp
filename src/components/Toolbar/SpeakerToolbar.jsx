import Toolbar from "./Toolbar";
import SpeakerList from "../Speaker/SpeakerList";
import { data } from "../SpeakerData";

const SpeakersToolbar = ({ theme, setTheme, showSessions, setShowSessions }) => {
  return (
     <div>
        <Toolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setsetShowSessions = {setShowSessions}/>
        <SpeakerList data={data} theme={theme} showSessions={showSessions} />
     </div>
  );
};

export default SpeakersToolbar;




