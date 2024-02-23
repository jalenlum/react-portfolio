import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Resume } from "../components/Resume";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Page = () => {
  return(
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
};