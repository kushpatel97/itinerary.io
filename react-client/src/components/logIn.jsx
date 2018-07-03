import React, { Component } from 'react';
import './css-styles/navbar.css';
import { Link, Route } from 'react-router-dom';
import SignUpComponent from './signUp';

class LogInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="dropdown-menu dropdown-menu-right" id="formLogin" aria-labelledby="navbarDropdownMenuLink">
                    
                    <Link to="/signUp" className="float-right btn btn-outline-primary">Sign Up</Link>
                    
                        {/* <a href="" className="float-right btn btn-outline-primary">Sign up</a> */}
                        <h4 className="card-title mb-4 mt-1">Sign in</h4>
                            <hr/>
                            <p className="text-success text-center">Welcome Back!</p>
                            <form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="user-icon"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input type="email" name="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="user-icon"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                       <input className="form-control" name="password" placeholder="******" type="password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                    </div>
                                    <p className="text-center"><a href="" className="btn">Forgot password?</a></p>
                            </form>
                </div>
            </div>
        );
    }
}

export default LogInComponent;