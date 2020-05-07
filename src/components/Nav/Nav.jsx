import React from "react";
import "./Nav.css";
import coronaHead from "../../static/img/corona-head.png";
const Nav = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        {" "}
        <img className="navbar__logo" src={coronaHead} alt="Corona Logo" />{" "}
        Corona Virus Tracker
      </div>
    </header>
  );
};
export default Nav;
