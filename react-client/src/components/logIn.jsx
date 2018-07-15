import React, { Component } from 'react';
import './css-styles/navbar.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import AuthHome from './authComponents/authHome';

class LogInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            verified: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectUser = this.redirectUser.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state));
    }

    handleSubmit(event) {
        event.preventDefault();
        const existingUser = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('/api/v1/user/login',existingUser)
        .then(res => { 
            localStorage.setItem('JWT-Token', res.data.token);
            localStorage.setItem('uid',res.data.uid);
            this.setState({
                verified: true
            },() => console.log(this.state)); 
        })
        .catch(error => {
            console.log(error)
        });
    }

    redirectUser() {
        if(this.state.verified){
            // const path = `/home/${localStorage.getItem('uid')}`;
            const path = '/home';
            return <Redirect to={path} />
        }
    }


    render() {
        return (
            <div className="card mx-auto my-5" style={styles.borders}>
            {this.redirectUser()}
                <article className="card-body">
                    <Link to="/signUp" className="float-right btn btn-outline-primary">Sign Up</Link>
                        <h4 className="card-title mb-4 mt-1">Sign in</h4>
                            <hr/>
                            <p className="text-success text-center">Welcome Back!</p>
                            <form onSubmit={this.handleSubmit} method="POST">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="user-icon">
                                                <i className="fa fa-user"></i>
                                            </span>
                                        </div>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            className="form-control"
                                            value={this.state.email} 
                                            onChange={this.handleChange} 
                                            placeholder="Email" 
                                            aria-label="Username" 
                                            aria-describedby="user-icon"
                                            required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        </div>
                                       <input 
                                            className="form-control" 
                                            name="password"
                                            value={this.state.password} 
                                            onChange={this.handleChange}
                                            type="password"
                                            required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    </div>
                                    <p className="text-center"><a href="" className="btn">Forgot password?</a></p>
                            </form>
                    </article>
            </div>
        );
    }
}

const styles = {
    borders: {
        maxWidth: "500px"
    }
}

export default LogInComponent;