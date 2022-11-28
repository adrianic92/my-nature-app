import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navDiv">
      <ul className="navBar">
      <li className="link">
      <Link to="/" exact>
        Home
      </Link>
      </li>
      <li className="link">
      <Link to="/about" exact>
        About
      </Link>
      </li>
      <li className="link">
      <Link to="/new" exact>
        Add A Plant
      </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;