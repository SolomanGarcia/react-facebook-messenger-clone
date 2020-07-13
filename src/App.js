import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // Logic to send message
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
