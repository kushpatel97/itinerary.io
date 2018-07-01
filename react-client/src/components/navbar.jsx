import React, { Component } from 'react';
import './css-styles/navbar.css';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" id="formLogin" aria-labelledby="navbarDropdownMenuLink">
                                            <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                                            <hr/>
                                            <p className="text-success text-center">Some message goes here</p>
                                            <form>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                                        </div>
                                                        <input name="" className="form-control" placeholder="Email or login" type="email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                                        </div>
                                                        <input className="form-control" placeholder="******" type="password"/>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                                </div>
                                                    <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
                                            </form>

                                    
                                    
                                    
                                    {/* <div className="row">
                                        <div className="container-fluid">
                                            <form className="">
                                                <div className="form-group">
                                                    <label className="">Username</label>
                                                    <input className="form-control" name="username" id="username" type="text"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="">Password</label>
                                                    <input className="form-control" name="password" id="password" type="password"/>
                                                    <br/>
                                                </div>
                                                <button type="submit" id="btnLogin" className="btn btn-success btn-sm">Login</button>
                                            </form>
                                        </div>
                                    </div> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;