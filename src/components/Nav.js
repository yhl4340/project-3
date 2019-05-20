import React from "react";
import Auth from "../Auth";

function Nav(props) {

    return (
    <div className='row justify-content-end mt-auto'>
      <ul className="nav nav-tabs">
        
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#aboutDog"
            onClick={() => props.handlePageChange("Blog")}
            className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
          >
            About Dogs
          </a>
        </li>
      </ul>
    </div>
    );
  }
export default Nav;
