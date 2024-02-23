import React from "react";
import { ReactDOM } from "react";

export const Rose = () => {
  return (
    <div className="card h-100 text-white" style={{ backgroundColor: "#282828" }}>
      <img className="card-img-top" src="../../../assets/rose.png" alt="Project"></img>
      <div className="card-body">
        <h4 className="card-title">Team ROSE</h4>
        <div className="card-subtitle mb-4"><h6>September 2023 - Present</h6></div>
        <div className="card-text">
          GNC Software Subteam Member (UI/UX)
        </div>

        <button
          className="btn text-white mt-4"
          data-bs-toggle="modal"
          data-bs-target="#rose"
          style={{ backgroundColor: "#1e1e1e", borderRadius: 60 }}>
          Read More
        </button>

        <div className="modal fade modal-xl text-black" id="rose">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content text-white" style={{ backgroundColor: "#282828" }}>
              <div className="modal-header" style={{ borderColor: "#282828" }}>
                <h1>Team RObotic Space Exploration (ROSE)
                  <h6 style={{ color: "#d3d3d3" }}>
                    September 2023 - Present
                    <h6>GNC Software Subteam Member 
                      <h6>Skills: React, JavaScript, Bootstrap 5, Node.js, Express.js, Jira, Github</h6>
                      <a className="text-white" href="https://manoa.hawaii.edu/uh-vip/project/robotic-space-exploration-rose-vip/" target="_blank"><i class="fa-solid fa-link"></i> link</a>
                    </h6>
                  </h6>
                </h1>
                <button className="btn-close align-self-start" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                The Robotics and Space Explorations team, a vertically integrated project (VIP) at the University of Hawai’i at Manoa, is dedicated to designing and building a rover for participation in the University Rover Challenge (URC). Specifically, I am a member of the Ground Station software sub-team, responsible for designing and developing a functional user interface.
                <br />
                <br />
                To enhance user experience and efficiency, our sub-team has successfully restructured the rover’s control user interface. Our tasks are closely aligned with the progress of other sub-teams within ROSE, and our efforts contribute to the overall success of the project.
                <br />
                <br />
                This website is built using React, leveraging its hooks and dependencies. This implementation allows for efficient management of stateful logic and enables us to extend React’s capabilities. Additionally, it contributes to improved code organization and enhances the overall development experience by providing solutions to common challenges encountered in building modern web applications.
                <br />
                <br />
                Express.js serves as a crucial component in our system, facilitating communication with the rover to acquire essential data such as linear speed while also enabling us to control the robot. Leveraging Express.js for our server-side implementation ensures a robust and efficient communication channel. By establishing routes and handling requests, we seamlessly retrieve real-time information, allowing us to monitor the rover’s information dynamically. Moreover, Express.js empowers us to implement controls that influence the robot’s behavior, providing a responsive and interactive means of managing the rover’s actions. This integration not only enhances the reliability of data retrieval but also offers a streamlined approach to remotely controlling and monitoring the rover’s performance in the field.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
