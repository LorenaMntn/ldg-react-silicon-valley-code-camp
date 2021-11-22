import Toolbar from "./Toolbar";
import SpeakerList from "../Speaker/SpeakerList";
import { data } from "../SpeakerData";
import { useState } from "react";

const SpeakersToolbar = ({ theme, setTheme }) => {
  const [showSessions, setShowSessions] = useState(true);
  return (
     <div>
        <Toolbar 
        theme={theme}
        setTheme={setTheme}/>
        <SpeakerList data={data} theme={theme} showSessions={showSessions} />
     </div>
  );
};

export default SpeakersToolbar;




