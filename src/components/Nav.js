import React from "react";

function Nav(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          
        </a>
      </li>
      
    </ul>
  );
}

export default Nav;
