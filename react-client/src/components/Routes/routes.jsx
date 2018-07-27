import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpComponent from '../signUp';
// import Navbar from '../navbar';
import LogInComponent from '../logIn';
import HomePage from '../home';
import AuthHome from '../authComponents/authHome';

class Routes extends Component {
    state = {  }
    render() {
        return (
            <div style={styles.bodyPadding}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/logIn" component={LogInComponent}/>
                    <Route path="/signUp" component={SignUpComponent}/>   
                    <Route path="/home/" component={AuthHome}/>   
                    <Route path="/home/:id" render={ (props) => <AuthHome {...props}/> } />    
                </Switch>
            </div>
        );
    }
}

const styles = {
    bodyPadding: {
        paddingTop: '70px'
    }
}

export default Routes;