import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
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

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
document.getElementById('root'));
registerServiceWorker();
