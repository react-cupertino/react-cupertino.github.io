import React from "react";
import { Link } from "react-router-dom";
import { PushButton } from 'react-cupertino';
import Logo from '../assets/rc-red.svg';
import "./Home.css";

function Home() {
  return (
    <header className="App-body">
      <img className="App-logo" src={Logo} alt="React Cupertino logo" />
      <p className="medium-txt">React Cupertino is a UI Component library inspired by Apple's Design Philosophy.</p>
      <div className="btn-container">
        <Link to="/install">
          <PushButton title="Installation" size="large" color="red"
            style={{ fontSize: "16px" }} />
        </Link>
        <Link to="/components/accordion">
          <PushButton title="Docs" size="large" color="red"
            style={{ fontSize: "16px" }} />
        </Link>
      </div>
    </header>
  );
}

export default Home;
