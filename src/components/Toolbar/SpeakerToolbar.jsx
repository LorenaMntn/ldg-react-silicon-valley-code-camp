import Toolbar from "./Toolbar";
import SpeakerList from "./SpeakerList";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

const SpeakersToolbar = ({ theme, setTheme }) => {
  return (
    <SpeakerFilterProvider initialShowSessions={true}>
      <Toolbar theme={theme} setTheme={setTheme} />
      <SpeakerList theme={theme} />
    </SpeakerFilterProvider>
  );
};

export default SpeakersToolbar;