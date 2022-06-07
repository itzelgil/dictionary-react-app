import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Listen
        </a>

        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
