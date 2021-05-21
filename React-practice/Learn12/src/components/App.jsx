import React, { useState } from "react";

function App() {
  /*
OLD-CODE WHICH RESULT SAME DOING----------------------------
    const [fName , setfName] = useState("");
    const [lName , setlName] = useState(""); 

    function updatefName(event){
      const newfirstName = event.target.value;
      setfName(newfirstName);
    }

    function updatelName(event){
      const newlastName = event.target.value;
      setlName(newlastName);
    }
*/

  /*
  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input name="fName" onChange={updatefName} placeholder="First Name" value={fName}/>
        <input name="lName" onChange={updatelName} placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
  ----------------------------------------------------------
*/

  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setfullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
