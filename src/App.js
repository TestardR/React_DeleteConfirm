import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DeleteButton from "./components/DeleteButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DeleteButton />
      </header>
    </div>
  );
}

export default App;
