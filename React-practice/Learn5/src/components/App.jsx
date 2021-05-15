import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function CreateCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgAvatar="https://getmyuni.azureedge.net/college-image/big/the-lnm-institute-of-information-technology-lnmiit-jaipur.jpg" />
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
