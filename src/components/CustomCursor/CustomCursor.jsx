import React, { useEffect, useRef } from "react";
import "./CustomCursor.scss";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 2,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
