import React, { useState } from "react";
import "./BlogPost.scss"

const BlogPost = ({title, text}) => {
    const [textOpen, setTextOpen] = useState(true);
    // const showMore = (event) =>{
    //     const post = event.target.closest(".single-post");
    //     post.querySelector(".post-text").classList.toggle("close")
    // }

    return(
        <article className="single-post">
            <div>
                <div>

                </div>
                <h3>
                    {title}
                </h3>
            </div>
            <p className={`post-text ${textOpen ? "close" : ""}`}>{text}</p>
            <button className="console-btn" onClick={() => setTextOpen((prev) => !prev)}>&gt; {textOpen ? "Полностью" : "Скрыть"}</button>
        </article>
    )
}

export default BlogPost