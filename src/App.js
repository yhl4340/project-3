import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/Notfound';
import Auth from './Auth';
import Callback from './components/Callback';
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faExclamationCircle)

class App extends Component {

 
  render() {
    let mainComp = '';
    switch(this.props.location){
      case '':
        mainComp= <Main {...this.props}/>;
        break;
        
      case 'callback':
      console.log('callaback', this.props.location);
        mainComp = <Callback/>;
        break;
      case 'secret':
      // console.log('secret', this.props.location);
      //     mainComp = <Secret {...this.props}/>;
        console.log('auth?',this.props.auth.isAuthenticated )
        mainComp= this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>;
        break;
        
      default:
        return <NotFound />;
   };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <h1><span>Welcome,{this.props.name}</span>
        <img src={this.props.pic}/> 
        </h1>
        <a href='/' style={{marginLeft:1000}}>Go Back</a>
        
      
      </header>
      <h4>Routes: {mainComp}</h4>
    </div>
  );
  }
};
export default App;
// -------------------------------------------------------------------


