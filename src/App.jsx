import React from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import GoTopBtn from "./components/GoTopBtn/GoTopBtn"

const App = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contacts />
      <GoTopBtn />
    </>
  );
};

export default App;
