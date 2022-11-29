import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navDiv">
      <ul className="navBar">
        <li className="link">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="/plants">
            Plants
          </Link>
        </li>
        <li className="link">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="link">
          <Link to="/new">
            Add A Plant
          </Link>
        </li>
    </ul>
    </div>
  );
}

export default NavBar;