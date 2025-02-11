import React from "react";
import "./Header.scss";
import Logo from "./Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";
import LangToggle from "./LangToggle/LangToggle";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header className="header">
      <BurgerMenu />  {/* Бургер появляется только на мобильных */}
      <Logo />
      <NavLinks />
      <LangToggle />
    </header>
  );
};

export default Header;