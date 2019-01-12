import React from "react";
import { ReactComponent as GithubLogo } from "../../assets/github-logo.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <nav>
          <a className="nav-link" href="/">
            React Cupertino
          </a>
          <a className="nav-link" href="/installation">
            Installation
          </a>
          <a className="nav-link" href="/components">
            Components
          </a>
        </nav>
        <div className="navbar-links">
          <a href="https://github.com/react-cupertino/react-cupertino">
            <GithubLogo className="navbar-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
