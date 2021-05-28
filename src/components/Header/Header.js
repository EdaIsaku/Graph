import React from "react";
import "../Header/Header.css";
import image from "../../assets/bgImg.png";
import imageGrey from "../../assets/bgImgGrey.png";

function Header() {
  return (
    <div className="header">
      <div className="header__box">
        <div className="header__box__data">
          <h2 className="header__box__data__title">$458.254</h2>
          <p className="header__box__data__subtitle">Sales</p>
        </div>
        <div className="header__box__image">
          <img className="header__box__image__src" src={imageGrey} />
        </div>
      </div>
      <div className="header__box">
        <div className="header__box__data">
          <h2 className="header__box__data__title">$965.584</h2>
          <p className="header__box__data__subtitle">Sales</p>
        </div>
        <div className="header__box__image">
          <img className="header__box__image__src" src={imageGrey} />
        </div>
      </div>
      <div className="header__box">
        <div className="header__box__data">
          <h2 className="header__box__data__title">$721.325</h2>
          <p className="header__box__data__subtitle">Sales</p>
        </div>
        <div className="header__box__image">
          <img className="header__box__image__src" src={image} />
        </div>
      </div>
    </div>
  );
}

export default Header;
