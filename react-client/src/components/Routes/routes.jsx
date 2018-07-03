import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import SignUpComponent from '../signUp';
import Navbar from '../navbar';
import LogInComponent from '../logIn';

class Routes extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Switch>
                    <Route to="/logIn" component={LogInComponent}/>
                    <Route to="/signUp" component={SignUpComponent}/>
                    <Route to="/" exact component={Navbar}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;