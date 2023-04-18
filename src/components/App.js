import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [input, setInput] = useState("");


  return (
    <div className="app">
      <Header input={input} setInput={setInput} />
      <ListingsContainer input={input} />
    </div>
  );
}

export default App;
