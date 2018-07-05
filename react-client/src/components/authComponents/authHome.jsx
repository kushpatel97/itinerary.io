import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class AuthHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                {this.props.userId}
            </div>
        );
    }
}

export default AuthHome;