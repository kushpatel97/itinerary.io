import React, { Component } from 'react';
import './css-styles/navbar.css';
import { NavLink } from 'react-router-dom';
import LogInComponent from './logIn';
import SignUpComponent from './signUp';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light container" >
                    <a className="navbar-brand" href="">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNavDropdown" className="navbar-collapse collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Pricing</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                                </a>
                                <LogInComponent/>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn btn-outline-dark" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sign Up
                                </a>
                                <SignUpComponent/>
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