import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'; 

var config = {
  apiKey: "AIzaSyBRHRdjJxEAku0qD5QGS5ZcCp_OCX7Bnnk",
  authDomain: "ionic-261d6.firebaseapp.com",
  databaseURL: "https://ionic-261d6.firebaseio.com",
  projectId: "ionic-261d6",
  storageBucket: "ionic-261d6.appspot.com",
  messagingSenderId: "40190700270"
};
firebase.initializeApp(config);

class App extends Component {

  constructor(){
    super();
    this.state = {
      speed: 11
    };
  }


  componentDidMount(){
    const rootRef = firebase.database().ref().child('ionic-261d6');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
      <h1>{ this.state.speed }</h1>
      </div>
    );
  }
}

export default App;