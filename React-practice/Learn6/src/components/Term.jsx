import React from "react";
import Meaning from "./Meaning";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojiTerm}
        </span>
        <span>{props.nameTerm}</span>
      </dt>
      <dd>
        <Meaning info={props.meaningTerm} />
      </dd>
    </div>
  );
}

export default Term;
