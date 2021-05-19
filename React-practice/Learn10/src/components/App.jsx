import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("Hello");

  const [colorChoosed, setcolorChoosed] = useState(false);

  function handleColor() {
    setcolorChoosed(true);
  }

  function handleMouseOut() {
    setcolorChoosed(false);
  }

  function handleClick() {
    setheadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: colorChoosed ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleColor}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
