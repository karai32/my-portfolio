import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import { useTranslation } from "react-i18next";
import "./BlogSection.scss"

const BlogSection = () => {
    const { t } = useTranslation();

    const posts = t("posts", { returnObjects: true }) || [];

    return (
        <section className="blog-wrapper">
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => (
                    <BlogPost key={post.id} title={post.title} text={post.text} />
                ))
            ) : (
                <p>Постов пока нет...</p> // Если массив пустой
            )}
        </section>
    );
};

export default BlogSection;


