import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import img from "../../picture/logo.png";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={img} alt="logo-imagees" />
      </div>
      <nav className="nav-cotainer">
        <ul>
          <li>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/courses">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/instructor">
              Instructor
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
