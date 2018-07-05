import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
// import {Route} from 'react-router-dom';
// import { SignUpComponent } from './components/signUp';
import Routes from './components/Routes/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div style={styles.bg}> */}
          <Navbar/>
          <Routes/>
          </div>
      // </div>
    );
  }
}

// const styles = {
//   bg: {
//     background: '#F7F8F9',
//     minHeight: '100%',
//     minWidth: '1024px',

//   }
// }

export default App;
