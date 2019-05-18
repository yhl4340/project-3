import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/Notfound';
import Auth from './Auth';
import Callback from './components/Callback';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faExclamationCircle)

class App extends Component {
  render() {
    let mainComp = '';
    console.log(this.props)   
    console.log(window.location.pathname)
    switch(window.location.pathname){
      case '/':
        mainComp= <Main {...this.props}/>;
        break;
      case '':
        mainComp= <Main {...this.props}/>;
        break;
        
      case '/callback':
      console.log('callaback', this.props.location);
        mainComp = <Callback/>;
        break;
      case '/secret':
      // console.log('secret', this.props.location);
      //     mainComp = <Secret {...this.props}/>;
        console.log('auth?',this.props.auth.isAuthenticated )
        mainComp= this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>;
        break;
        
      default:
        mainComp= <NotFound />;
   };


  return (
    // <Router>
    <div>
      {/* <Jumbotron /> */}
      {mainComp}
      {/* <Nav/> */}
      {/* <Switch>
         <Route exact path="/" component={Books} />
         </Switch> */}

      {/* // </Router>
       */}
      {/*      
      <header className="App-header"> */}

      {/* <h1><span>Welcome,{this.props.name}</span>
        <img src={this.props.pic}/> 
        </h1>
      </header>
      <h4>Routes: {mainComp}</h4> */}
    </div>
  );
  }
};
export default App;



