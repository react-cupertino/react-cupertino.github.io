import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GithubLogo } from "../../assets/github-logo.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <nav>
          <Link className="nav-link" to="/">
            React Cupertino
          </Link>
          <Link className="nav-link" to="/install">
            Installation
          </Link>
          <Link className="nav-link" to="/components">
            Components
          </Link>
        </nav>
        <div className="navbar-links">
          <a
            href="https://github.com/react-cupertino/react-cupertino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo className="navbar-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
