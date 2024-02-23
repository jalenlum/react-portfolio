import React from "react";
import { ReactDOM } from "react";

export const Home = () => {
  return (
    <div className="container" id="home" style={{ marginTop: 100 }}>
      <div className="row justify-content-center">
        <div className="col-md-7 col-sm-12 align-self-center">
          <h1>Hello! I'm Jalen.</h1>
          <p>
            I'm a college undergraduate studying Computer Science at the University of Hawai'i
            at Mānoa.
          </p>
        </div>
        <div className="col-md-5 col-sm-12 mb-3 align-self-center">
          <img
            className="img-fluid"
            src="../../assets/headshot.png"
            alt="headshot"
            style={{ borderRadius: 15 }}
          />
        </div>
      </div>
    </div>
  );
}
