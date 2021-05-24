import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.svg";

function Navbar() {
  return (
    <header>
      <nav className="bochaperNav">
        <div className="bochaperNav__logo-container">
          <img className="bochaperNav__logo" src={logo} alt="alexey" /> Bochaper
        </div>
        <Link className="bochaperNav__link" to="/">
          Главная
        </Link>
        <Link className="bochaperNav__link" to="/tabs">
          Tabs
        </Link>
        <Link className="bochaperNav__link" to="/music">
          Music
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
