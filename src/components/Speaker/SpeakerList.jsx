import SpeakerCard from "./SpeakerCard";

function SpeakerList({ data, theme, showSessions }) {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return <SpeakerCard key={speaker.id} speaker={speaker} theme = {theme} showSessions={showSessions}/>;
        })}
      </div>
    </div>
  );
}

export default SpeakerList;