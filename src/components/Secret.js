import React, { Component } from "react";
import logo from "../logo.svg";
import Nav from "./Nav";
import Auth from '../Auth';

class Secret extends Component {
  render() {
    console.log("getting here?");
    return (
      <div className="container-fluid">
        <Nav {...this.props}/>
       {/* {!this.props.auth.isAuthenticated()&& 
        <a href="#">
          <button
            onClick={this.props.auth.login}
            className="btn btn-lg-primary"
            id="loginOne"
          >
            Log In
          </button>
        </a>
       }
        <a href="#">
          <button onClick={this.props.auth.logout} className="logout">
            Log Out
          </button>
        </a> */}
       
        <div className="welcomeMsg">
          <span>Welcome, {this.props.name}
          <img src={this.props.pic} />
          </span>
        </div>
        <br/>
        <h4>content after logged in</h4>
      </div>
    );
  }
}
export default Secret;
