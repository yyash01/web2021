//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const newDate = new Date();
const time = newDate.getHours();

// now we would create a javascript object.
const customeStyle = {
  color: "" //this is key of the object 
  //we say this color key.
};

let msg; //a variable

if (time < 12) {
  msg = "good-morning";
  customeStyle.color = "red";
} else if (time < 18) {
  msg = "Good afternoon";
  customeStyle.color = "green";
} else {
  msg = "Good evening";
  customeStyle.color = "blue";
}


ReactDOM.render(
  <div>
    <h1 className="heading" style={customeStyle}>
      {msg}
    </h1>
  </div>,
  document.getElementById("root")
);

// inline css styles
//So how do we add an inline CSS style?
/*
Well we use the style property, 
and we're going to set it equal to a 
Javascript object which is going
to be a custom style.
So let's create that up here.
Let's create a constant called custom style and 
let's make it a Javascript object with a color key which
we're going to set at some point in our code.
So this color key is going to be red in the morning, 
green in the afternoon and blue in the night.

 */
