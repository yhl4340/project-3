import React from "react";
import Auth from "../Auth";

function Nav(props) {
 console.log('nav', props);
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
        <li className='nav-item'>
        <a href="#">
          <button
            onClick={props.auth.login}
            className="btn btn-lg-primary"
            id="login"
          >
            Log In
          </button>
        </a>
      </li>
      <li className='nav-item'>
      <a href="#">
          <button
            onClick={props.auth.login}
            className="btn btn-lg-primary"
            id="logout"
          >
            Log Out
          </button>
        </a>
      </li>
      </ul>
    </div>
    );
  }
export default Nav;
