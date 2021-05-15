import React from "react";
import Term from "./Term";
import infoEmoji from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {infoEmoji.map((UniqueTerm) => (
          <Term
            key={UniqueTerm.id}
            nameTerm={UniqueTerm.name}
            meaningTerm={UniqueTerm.meaning}
            emojiTerm={UniqueTerm.emoji}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
