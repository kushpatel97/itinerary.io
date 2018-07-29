import React, { Component } from 'react';
import axios from 'axios';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            days: '',
            monthFrom: '',
            monthTo: '',
            author: localStorage.getItem('uid')
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        },() => console.log(this.state));
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Submitted Form ...');
    }
    // If there is no current user, make sure that person cannot create a Post
    // More Auth Stuff
    // getCurrentUser(){
    //     let uid = localStorage.getItem('uid');
    //     this.setState({
    //         author: uid
    //     },() => console.log(this.state.author));
    // }

    render() {
        return (
            <div>
                <h1> New Post Form</h1>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="Title Goes Here"
                            required/>
                    </div>
                    {/* Still need to come up for an effective content method */}
                    
                    {/* Need to change to a date picker */}
                    <div className="form-group">
                        <input 
                            type="text"
                            name="days"
                            className="form-control"
                            value={this.state.days}
                            onChange={this.handleChange}
                            placeholder="Number of days spent. Should be a number picker"
                            required/>
                    </div>
                    {/* Year went format MM-DD-YYYY */}
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <input 
                                    type="text"
                                    name="monthFrom"
                                    className="form-control"
                                    value={this.state.monthFrom}
                                    onChange={this.handleChange}
                                    placeholder="From Date MM-DD-YYY"
                                    required/>
                            </div>
                            <div className="col-6">
                                <input 
                                    type="text"
                                    name="monthTo"
                                    className="form-control"
                                    value={this.state.monthTo}
                                    onChange={this.handleChange}
                                    placeholder="To MM-DD-YYYY"
                                    required/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <textarea
                            name="content"
                            className="form-control"
                            value={this.state.content}
                            onChange={this.handleChange}
                            placeholder="Content description"
                            required/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-success btn-block">Submit to Form</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPost;