import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/Notfound';
import Auth from './Auth';


class App extends Component {

  render() {
    let mainComp = '';
    switch(this.props.location){
      case '':
        mainComp= <Main {...this.props}/>;
        break;
        
      case 'secret':
        mainComp= <Secret />;
        break;
        
      default:
        return <NotFound />;
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, {this.props.name}</h1>
      
      </header>
      <h4>Routes: {mainComp}</h4>
    </div>
  );
  }
};
export default App;
