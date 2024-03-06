import React from "react";
import { ReactDOM } from "react";
import { Portfolio } from "./projects/Portfolio";
import { Lifte } from "./projects/Lifte";
import { Rose } from "./projects/Rose";
import { LGBTQ } from "./projects/LGBTQ";
import { Email } from "./projects/Email";
import { Emporium } from "./projects/Emporium";
import { Bit } from "./projects/8bit";

export const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="row mt-5 justify-content-center">
        <div className="col text-center">
          <h1>Projects</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <Portfolio />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <Lifte />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <Rose />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <LGBTQ />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <Email />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <Bit />
        </div>
      </div>
    </div>
  );
}


