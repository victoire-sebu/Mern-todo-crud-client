import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        <img src={logo} alt="Vitech Entreprise" />
      </a>
      {/* <Link to={"/"} className="nav-link">
        <img src={logo} alt="Vitech Entreprise" />
      </Link> */}
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            List
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/creat"} className="nav-link">
            Creat
          </Link>
        </li>
      </div>
    </nav>
  );
};
export default Navigation;
