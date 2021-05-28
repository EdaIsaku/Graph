import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Dashboard</h1>
      <div className="header__box">
        <h5 className="header__box__title">New request</h5>
        <p className="header__box__subtitle">Income</p>
      </div>
      <div className="header__box">
        <h5 className="header__box__title">New request</h5>
        <p className="header__box__subtitle">Income</p>
      </div>
      <div className="header__box">
        <h5 className="header__box__title">New request</h5>
        <p className="header__box__subtitle">Income</p>
      </div>
    </div>
  );
}

export default Header;
