import React from "react";
import { ReactDOM } from "react";

export const Portfolio = () => {
  return (
    <div className="card h-100 text-white" style={{ backgroundColor: "#282828" }}>
      <img className="card-img-top" src="../../../assets/placeholder.jpg" alt="Project"></img>
      <div className="card-body">
        <h4 className="card-title">React Portfolio</h4>
        <div className="card-subtitle mb-4"><h6>September 2023</h6></div>
        <div className="card-text">
          A comprehensive showcase of all my accomplishments on a full-stack website
        </div>

        <button
          className="btn text-white mt-4"
          data-bs-toggle="modal"
          data-bs-target="#portfolio"
          style={{ backgroundColor: "#1e1e1e", borderRadius: 60 }}>
          Read More
        </button>

        <div className="modal fade modal-xl text-black" id="portfolio">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content text-white" style={{ backgroundColor: "#282828" }}>
              <div className="modal-header" style={{ borderColor: "#282828" }}>
                <h1>React Portfolio
                  <h6 style={{ color: "#d3d3d3" }}>
                    September 2023
                    <h6>A comprehensive showcase of all my accomplishments on a full-stack website
                      <h6>Skills: React, JavaScript, Bootstrap 5, Firebase, Github, Netlify</h6>
                      <a className="text-white" href="https://jalenlum.com/" target="_blank"><i class="fa-solid fa-link"></i> jalenlum.com</a>
                    </h6>
                  </h6>
                </h1>
                <button className="btn-close align-self-start" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                I developed the weightlifting calculator as a web application as part of a personal project, with the primary goal of helping me with my health and fitness.
                <br />
                <br />
                My website is equipped with two different calculators. The Smolov Jr calculator is designed to assist users in implementing the renowned Smolov Jr program, optimizing their training for increased strength. Additionally, the one-rep max calculator, utilizing the Brzycki formula, offers a reliable method to estimate your maximum lifting capacity.
                <br />
                <br />
                This weightlifting calculator is a frontend application that utilizes React.js framework for its hooks and reusable components, enabling it to efficiently manage stateful logic. This application also uses Bootstrap 5 for its intuitive grid system and responsive design features to create a sleep and visually appealing user interface.
                <br />
                <br />
                All of the calculations for my weightlifting website were made using JavaScript, ensuring seamless execution within the browser environment, allowing users to conveniently perform dynamic calculations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}