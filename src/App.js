import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://seating-arrangement-api-production.up.railway.app/message")
    // fetch("http://localhost:4000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App