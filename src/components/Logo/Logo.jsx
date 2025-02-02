import React from "react";
import { useTranslation } from "react-i18next";
import "./Logo.css";
import profilePhoto from "../../assets/profile.jpeg"; // Добавь свою фотографию в папку assets

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <img src={profilePhoto} alt={t("logo.name")} className="logo-img" />
      <div className="logo-text">
        <span className="logo-name">{t("logo.name")}</span>
        <span className="logo-subtitle">{t("logo.desc")}</span>
      </div>
    </div>
  );
};

export default Logo;
