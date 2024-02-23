import React from "react";
import { ReactDOM } from "react";

export const Contact = () => {
  return (
    <div className="container mt-5 mb-5" id="contact">
      <div className="row justify-content-center">
        <div className="col text-center">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me through this contact form.</p>
        </div>
      </div>
      <div className="row mt-2 justify-content-center">
        <div className="col-lg-9 col-md-12 col-sm-12 text-center">
          <form action="https://api.backendform.com/sendform/808jalen@gmail.com" method="post">
            <input className="contact-text mt-3" placeholder="Your Name" type="text" name="name" />
            <br />
            <input className="contact-text mt-4" placeholder="Your Email" type="email" name="email" />
            <br />
            <textarea className="contact-text mt-4" placeholder="Your Message" type="text" name="message" style={{ height: 250, resize: "none" }} />
            <br />
            <button className="btn text-white mt-4" type="submit" style={{ backgroundColor: "#282828", width: 120, height: 45, borderRadius: 60 }}>
              <div>Submit&nbsp; <i className="fas fa-paper-plane"></i></div>
            </button>
            <input hidden type="text" name="from" value="Portfolio Website" />
            <input hidden type="text" name="redirect" value="https://jalenlum.com/" />
          </form>
        </div>
      </div>
    </div>
  );
};
