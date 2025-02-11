import React from "react";
import { useTranslation } from "react-i18next";
import "./Portfolio.scss";

// Импортируем изображения (замени названия на свои)
import work1 from "../../assets/works/work1.webp";
import work2 from "../../assets/works/work2.webp";
import work3 from "../../assets/works/work3.webp";
import work4 from "../../assets/works/work4.webp";
import work5 from "../../assets/works/work5.webp";
import work6 from "../../assets/works/work6.webp";

const Portfolio = () => {
  const { t } = useTranslation();

  // Загружаем проекты из перевода
  const projects = t("portfolio.projects", { returnObjects: true });

  // Список изображений для проектов (в том же порядке, что и в JSON)
  const images = [work1, work2, work3, work4, work5, work6];

  return (
    <section id="projects" className="portfolio">
      <h2>{t("portfolio.title")}</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={images[index]} alt={project.title} className="portfolio-img" />
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              {t("portfolio.visit_site")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;