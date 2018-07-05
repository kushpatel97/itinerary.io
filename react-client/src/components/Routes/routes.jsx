import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpComponent from '../signUp';
// import Navbar from '../navbar';
import LogInComponent from '../logIn';
import HomePage from '../home';

class Routes extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/logIn" component={LogInComponent}/>
                    <Route path="/signUp" component={SignUpComponent}/>       
                </Switch>
            </div>
        );
    }
}

export default Routes;