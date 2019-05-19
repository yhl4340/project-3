import React, { Component } from "react";
import logo from "../logo.svg";
import Auth from "../Auth";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeart } from "react-icons/fa";

class Main extends Component {
  render() {
    console.log("test");
    return (
      <div className="container-fluid">
        <div id='background'>
        <Nav />
       
        <h2>
          
          A dog's Love
          <FontAwesomeIcon icon="FaHeart" size="4x" />
        </h2>

        {/* //     <h1 className='App-title'>
            // //     <p>Hey {this.props.name}, Here is the Main page
            // //     {/* <img src={this.props.pic}/> */}
        {/* //     </p> */}
        {/* </h1> */}
        {/* {!this.props.auth.isAuthenticated()&& */}
        {/* <div> */}

        <button
          onClick={this.props.auth.login}
          className="btn btn-lg-primary"
          id="login"
        >
          Log In
        </button>
        </div>
      </div>
    );
  }
}
export default Main;
