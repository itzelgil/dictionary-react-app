import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  // console.log(props.phonetic);
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="text">{props.phonetic.text}</span>
        <br />
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          className="Audio"
          style={{
            background: "#f7f7f2",
          }}
        />
      </div>
    );
  } else {
    return null;
  }
}
