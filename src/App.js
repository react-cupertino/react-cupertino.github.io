import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <p>React Cupertino</p>
        </header>
      </div>
    );
  }
}

export default App;
