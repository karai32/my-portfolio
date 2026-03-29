import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import "./ExperienceHeader.scss";

const ExperienceHeader = () => {
  const { t } = useTranslation();
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    textRef.current.innerHTML = "";
    cursorRef.current.style.display = "inline-block";
    gsap.to(textRef.current, {
      duration: 3,
      text: t("experience.desc"),
      ease: "none",
      onComplete: () => {
        cursorRef.current.style.display = "none";
      },
    });
  }, [t]);

  return (
    <section id="ExperienceHeader" className="experience-header">
      <h2>{t("experience.title")}</h2>
      <p>
        <span ref={textRef}></span>
        <span ref={cursorRef} className="cursor">
          |
        </span>
      </p>
    </section>
  );
};

export default ExperienceHeader;
