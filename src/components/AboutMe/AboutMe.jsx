import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutMe.css';
import profilePhoto from '../../assets/profile.jpeg';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';

const AboutMe = () => {
  const { t } = useTranslation();
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    textRef.current.innerHTML = ""
    cursorRef.current.style.display = 'inline-block';
    gsap.to(textRef.current, {
      duration: 6,
      text: t('greeting'),
      ease: 'none',
      onComplete: () => {
        cursorRef.current.style.display = 'none';
      },
    });
  }, [t]);

  return (
    <section id='about' className="about-me">
      {/* Основной блок */}
      <div className="about-content">
        <img src={profilePhoto} alt="Тепляков Артем" className="about-img" />
        <div className="about-text">
          <h2>{t('about_me')}</h2>
          <p>
            <span ref={textRef}></span>
            <span ref={cursorRef} className="cursor">|</span> {/* Курсор */}
          </p>
        </div>
      </div>

      {/* Блок с технологиями */}
      <div className="technologies">
        <h3>{t('technologies_title')}</h3>
        <div className="tech-list">
          {t('technologies', { returnObjects: true }).map((tech, index) => (
            <span key={index} className="tech-item">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;