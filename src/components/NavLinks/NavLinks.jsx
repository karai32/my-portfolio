import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./NavLinks.css";

const NavLinks = () => {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} duration={1000} offset={-85}>
            {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={1000} offset={-85}>
            {t("nav.portfolio")}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000} offset={-85}>
            {t("nav.contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
