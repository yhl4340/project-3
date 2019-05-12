import React, {Component} from 'react';
import logo from '../logo.svg';

class Main extends Component{
    render(){
        return(
            <div className='wrapper'>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
{/*                  */}
                <h1 className='App-title'>
                Hi, {this.props.name}. Here is the Main page</h1>
                {!this.props.auth.isAuthenticated()&&
                <div>
                    <p>log in</p>
                    <button onClick ={this.props.auth.login} ></button>
                </div>
                }
            </div>
        )
    }
}
export default Main;