import React, {Component} from 'react';
import logo from '../logo.svg';

class Secret extends Component {
    render(){
    return(
        <div>
                 
            <h3>Secret,shhh</h3>
            <button onClick={this.props.auth.logout}>Log Out</button>
            {/* <h5><a href='/'>Go Back</a></h5> */}
            
          
        </div>
    )
    }
};
export default Secret;