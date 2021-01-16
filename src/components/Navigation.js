import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      {/* <a href="/" className="navbar-brand">
        MyTodo
      </a> */}
      <Link to={"/"} className="nav-link">
        MyTodo
      </Link>
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
