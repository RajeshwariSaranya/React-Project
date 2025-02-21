
import React from "react";
import "./Menubar.css";

const Menubar = () => {
  return (
    <menubar className="menubar">
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Sign in</a>
          </li>
          <li>
            <a href="#about">Profile</a>
          </li>
          <li>
            <a href="#services">Theme</a>
          </li>
          <li>
            <a href="#contact">Setting</a>
          </li>
        </ul>
      </nav>
    </menubar>
  );
};

export default Menubar;