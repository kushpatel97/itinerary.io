import React, { Component } from 'react';
import './css-styles/navbar.css';
import { Link } from 'react-router-dom';
// import LogInComponent from './logIn';
// import SignUpComponent from './signUp';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={styles.bg}>
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNavDropdown" className="navbar-collapse collapse">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Pricing</a>
                            </li> */}
                            
                        </ul>
                        <ul className="navbar-nav right">
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/logIn">Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/signUp">Sign Up</Link>
                            </li>
                        </ul> 
                    </div>
                </nav>
            </div>
        );
    }
}

const styles = {
    bg: {
        backgroundColor: "#e3f2fd"
    }
}

export default Navbar;