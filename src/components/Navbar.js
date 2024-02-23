import React from "react";
import { ReactDOM } from "react";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark" style={{ backgroundColor: "#1e1e1e" }}>
      <div className="container">
        <a href="https://jalenlum.com/" className="navbar-brand" style={{ fontSize: 30, fontWeight: 600 }}>JALEN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="nav">
          <ul className="navbar-nav">
            {['home', 'about', 'resume', 'projects', 'contact'].map((link, index) => (
              <li key={index} className="nav-item">
                <a href={`#${link}`} className="nav-link links" style={ {fontSize: 20, fontWeight: 500 }}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
