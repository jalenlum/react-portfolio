import React from "react";
import { ReactDOM } from "react";

export const About = () => {

  return (
    <div className="container mt-5" id="about">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12 mb-3 align-self-center">
          <img
            className="img-fluid"
            src="../../assets/about.jpg"
            alt="snow"
            style={{ borderRadius: 15 }}
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <h1>About Me</h1>
          <p>
            Hi! My name is Jalen Lum, and I'm currently pursuing my Bachelor's in Computer Science
            at the University of Hawai'i at Mānoa with the goal of becoming a software developer.
            I was born and raised in Hawai'i on the island of Oahu, where I developed a deep passion
            for using technology to harness its transformative potential and create innovative solutions.
            I aspire to improve my skills as a software developer and am eager to do so by collaborating 
            with and learning from experienced professionals.
          </p>
          <button className="nav-link links d-inline" style={{marginRight: "2.5rem"}} > <h5>Education</h5> </button>
          <button className="nav-link links d-inline"> <h5>Skills</h5> </button>
        </div>
      </div>
    </div>
  );
}

