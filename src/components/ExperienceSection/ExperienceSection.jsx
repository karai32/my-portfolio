import React from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { useTranslation } from "react-i18next";
import "./ExperienceSection.scss";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const posts = t("posts", { returnObjects: true }) || [];

  return (
    <section className="experience-wrapper">
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <ExperienceItem key={post.id} title={post.title} text={post.text} />
        ))
      ) : (
        <p>Пока нет опыта...</p>
      )}
    </section>
  );
};

export default ExperienceSection;
