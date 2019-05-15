import React, {Component} from 'react';
import logo from '../logo.svg';
import Auth from '../Auth';
class Main extends Component{

    render(){
        return(
            <div className='wrapper'>
                <h1 className='App-title'>
                <p>Hey {this.props.name}, Here is the Main page
                {/* <img src={this.props.pic}/> */}
                </p>
                </h1>
                {/* {!this.props.auth.isAuthenticated()&& */}
                <div>
                    {/* <p>log in</p> */}
                    <button onClick={this.props.auth.login} className='btn btn-lg'>Log In</button>
                </div>
                
            </div>
        )
    }
}
export default Main;