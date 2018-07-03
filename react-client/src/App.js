import React, { Component } from 'react';
// import './App.css';
import Navbar from './components/navbar';
import {Route} from 'react-router-dom';
import { SignUpComponent } from './components/signUp';
import Routes from './components/Routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar/>
        <h1>Hello</h1>
        <Routes/>
      </div>
    );
  }
}

export default App;
