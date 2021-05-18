import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',second: 'numeric', hour12: false });
  setInterval(updateTime, 1000)

  const [time,setTime] = useState(now)

  function updateTime(){
    const newTime = new Date().toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',second: 'numeric', hour12: false });

    setTime(newTime)
  }


  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick= {updateTime}>Get Time</button>
    </div>
  );
}

export default App;
