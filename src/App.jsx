import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import GoTopBtn from "./components/GoTopBtn/GoTopBtn"

import Blog from "./pages/blog/Blog"
import Front from "./pages/front/Front"

const App = () => {
  return (
    <>
      <Router>
        <CustomCursor />
        <Header />

        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <GoTopBtn />
      </Router>
    </>
  );
};

export default App;
