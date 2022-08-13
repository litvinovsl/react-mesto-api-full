import React from "react";
import { Link, Route } from "react-router-dom";
import { useLocation } from 'react-router';
import headerLogo from "../images/logo-mesto.svg";

function Header({ logoutProfile, userEmail }) {

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="лого" />
      <div className="menu">
        <Route path="/sign-in">
          <Link to="/sign-up" className="menu__link menu__link_link">Регистрация</Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="menu__link menu__link_link">Войти</Link>
        </Route>
        <Route exact path="/">
          <p className="menu__link menu__link_email">{userEmail}</p>
          <Link to="/sign-in" onClick={logoutProfile} className="menu__link menu__link_link">Выйти</Link>
        </Route>
      </div>
    </header>
  );
}

export default Header;
