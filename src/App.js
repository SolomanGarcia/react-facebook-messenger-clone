import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // Logic to send message
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </form>

      {/* displays messages */}
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
