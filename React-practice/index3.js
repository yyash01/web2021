import React from "react";
import ReactDOM from "react-dom";

// in this lecture we see the functioning of React props and how we can use it :


function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p><strong>Telephone :</strong><br></br>{props.phone}</p>
      <p><strong>Email :</strong><br></br>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card 
      name="Yash" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
