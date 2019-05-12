import React, {Component} from 'react';
import logo from '../logo.svg';

class Secret extends Component {
    render(){
    return(
        <div>
                 
            <h3>Secret,not the route</h3>
            <button onClick={this.props.auth.logout}>Log Out</button>
          
        </div>
    )
    }
};
export default Secret;