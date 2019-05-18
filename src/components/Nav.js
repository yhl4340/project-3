import React from "react";

function Nav(props) {

    return (
    <div className='row justify-content-end'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="/"
            onClick={() => props.handlePageChange("Home")}
            className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
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
        {/* <li className="nav-item">
          <a
            href="#logout"
            onClick={() => props.handlePageChange("logout")}
            className={props.currentPage === "LogOut" ? "nav-link active" : "nav-link"}
          >
            Log out
          </a>
        </li> */}
      </ul>
    </div>
    );
  }
export default Nav;
