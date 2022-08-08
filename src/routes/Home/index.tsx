import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

export default () => (
  <header className="App-header">
    <h1>Football Application</h1>
    <img className="App-logo" alt="logo" src={logo} loading="lazy" />
    <Link className="App-link" to="teams">
      View Teams
    </Link>
  </header>
);
