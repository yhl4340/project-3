import React, {Component} from 'react';
import logo from '../logo.svg';
import Auth from '../Auth';
import Jumbotron from './Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from 'react-icons/fa';
import Nav from './Nav';

class Main extends Component{

    render(){
        return(
            <div className='container-fluid'>
            <Jumbotron/>
           
            <h2> A dog's Love
            <FontAwesomeIcon id='heartIcon' icon="FaHeart" size='4x'  />
            </h2>
            {/* //     <h1 className='App-title'>
            //     <p>Hey {this.props.name}, Here is the Main page
            //     {/* <img src={this.props.pic}/> */}
            {/* //     </p> */}
                {/* </h1> */}
                {/* {!this.props.auth.isAuthenticated()&& */}
                 {/* <div> */}
      
                    <button onClick={this.props.auth.login} className='btn btn-lg'>Log In</button>
            </div>
        )
    }
}
export default Main;