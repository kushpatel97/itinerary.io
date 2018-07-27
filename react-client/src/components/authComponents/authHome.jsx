import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom";
import {  getUID } from '../../helpers/jwt';
import axios from 'axios';
import SideBar from './sidebar';
import Post from '../modelComponents/post';
import MainPage from './mainPage';


class AuthHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: []
        };
    }

    componentDidMount(){
        const uid = getUID();
        if(!uid){
            this.props.history.push('/login');
        }

    //    axios.get('/api/v1/post/getposts')
    //    .then(res => {
    //        console.log(res.data);
    //        this.setState({
    //            posts: res.data
    //        });
    //    })
    //    .catch(error => {
    //         console.log(error)
    //     });
    }

    render() {
        // if(this.state.user === undefined){
        //     return (
        //         <div><h1>Loading</h1></div>
        //     );
        // }
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                    <SideBar/>
                    <MainPage/>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default AuthHome;