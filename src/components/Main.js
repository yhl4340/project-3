import React, { Component } from "react";
import Auth from "../Auth";
import Nav from "./Nav";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "react-icons/fa";

class Main extends Component {
  render() {
    console.log("test");
    return (
      <div className="container-fluid">
        <div id='background'>
            <Nav/>
            <a href='#'><button
                    onClick={this.props.auth.login}
                    className="btn btn-lg-primary"
                    id="login"
                >
                    Log In
            </button>
            </a>
            <h1>
                A Dog's Love
                <FontAwesomeIcon icon="faHeart" size="4x" />
            </h1>
            <h3>
               <p> One in Five dogs never leaves the shelther</p>
                <br/>
                <p>Let's adopt better!</p> 
            </h3>

        {/* //     <h1 className='App-title'>
            // //     <p>Hey {this.props.name}, Here is the Main page
            // //     {/* <img src={this.props.pic}/> */}
        {/* //     </p> */}
        {/* </h1> */}
        {/* {!this.props.auth.isAuthenticated()&& */}
        {/* <div> */}

        {/* <div className='row justify-conten-end'>
            <button
                onClick={this.props.auth.login}
                className="btn btn-lg-primary"
                id="login"
            >
                Log In
            </button>
        </div> */}
        </div>
      </div>
    );
  }
}
export default Main;
