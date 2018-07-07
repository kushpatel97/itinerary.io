import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { getJWT } from '../../helpers/jwt';
import axios from 'axios';


class AuthHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    // componentDidMount(){
    //     const jwt = getJWT();
    //     if(!jwt){
    //         this.props.history.push('/login');
    //     }

    //     axios.get('/api/v1/user', {headers: {Authorization: `Bearer ${jwt}`}})
    //     .then(res => {
    //         this.setState({
    //             user: res.data
    //         },() => console.log(this.state))
    //     })
    //     .catch(err => {
    //         localStorage.removeItem('JWT-Token');
    //         this.props.history.push('/login');
    //     });
    // }

    render() {
        // if(this.state.user === undefined){
        //     return (
        //         <div><h1>Loading</h1></div>
        //     );
        // }
        return(
            <div>
                <h1>Protected Home Screen</h1>
                {this.props.match.params.id}
            </div>
        );
        
    }
}

export default AuthHome;