import Toolbar from "./Toolbar";
import SpeakerList from "../Speaker/SpeakerList";
import { data } from "../SpeakerData";
import { useState } from "react";

const Years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

const SpeakersToolbar = ({ theme, setTheme}) => {
  const [showSessions, setShowSessions] = useState(true);
  const [eventYear, setEventYear] = useState(Years);
  return (
     <div>
        <Toolbar 
        theme={theme} 
        setTheme={setTheme} 
        showSessions={showSessions} 
        setShowSessions={setShowSessions}
        eventYear={eventYear}
        setEventYear={setEventYear}
        />
        <SpeakerList data={data} theme={theme} showSessions={showSessions} />
     </div>
  );
};

export default SpeakersToolbar;




