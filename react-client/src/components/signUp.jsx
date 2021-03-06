import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css-styles/navbar.css';
import axios from 'axios';

class SignUpComponent extends Component {
    constructor() {
        super();
        this.state = { 
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state));
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('/api/v1/user/signup',user )
        .then( res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        });

        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        });

    }

    render() {
        return (
            <div className="card mx-auto my-5" style={styles.borders}>
                <header className="card-header">
                    <Link to="/logIn" className="float-right btn btn-outline-primary mt-1">Log in</Link>
                    <h4 className="mt-2">Sign up</h4>
                </header>
                <article className="card-body">
                <form onSubmit={this.handleSubmit} method="POST">
                    <div className="form-row">
                        <div className="col form-group">
                            <label>First name</label>
                            <input 
                                type="text" 
                                name="first_name" 
                                value={this.state.first_name} 
                                className="form-control"
                                onChange={this.handleChange}
                                required />
                        </div> 
                        <div className="col form-group">
                            <label>Last name</label>
                            <input 
                                type="text" 
                                name="last_name" 
                                value={this.state.last_name} 
                                className="form-control"
                                onChange={this.handleChange}
                                required />
                        </div> 
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            value={this.state.email} 
                            placeholder="" 
                            onChange={this.handleChange}
                            required />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div> 
                    <div className="form-group">
                        <label>Create password</label>
                        <input 
                            className="form-control" 
                            name="password" 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                            required />
                        <div className="invalid-feedback">
                            Please provide a valid password.
                        </div>
                    </div>   
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                    </div>     
                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small>                                          
                </form>
                </article>
                <Link to="/logIn" className="border-top card-body text-center">Have an account?  | Log In</Link>
            </div>
        );
    }
}

const styles = {
    borders: {
        maxWidth: "500px"
    }
}

export default SignUpComponent;