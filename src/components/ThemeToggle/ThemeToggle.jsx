import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  // По умолчанию включаем тёмную тему, если нет данных в localStorage
  const storedTheme = localStorage.getItem("theme");
  const defaultDarkMode = storedTheme ? storedTheme === "dark" : true;
  const [darkMode, setDarkMode] = useState(defaultDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
