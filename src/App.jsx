import React from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contacts />
    </>
  );
};

export default App;
