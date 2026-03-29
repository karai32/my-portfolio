import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./ExperienceItem.scss";

const ExperienceItem = ({ title, text }) => {
  const [textOpen, setTextOpen] = useState(true);
  const { t } = useTranslation();

  return (
    <article className="experience-item">
      <div>
        <div></div>
        <h3>{title}</h3>
      </div>

      <p className={`experience-text ${textOpen ? "close" : ""}`}>{text}</p>

      <button
        className="console-btn"
        onClick={() => setTextOpen((prev) => !prev)}
      >
        &gt; {textOpen ? t("experience.showMore") : t("experience.hide")}
      </button>
    </article>
  );
};

export default ExperienceItem;
