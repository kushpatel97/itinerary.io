import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom";
import {  getUID } from '../../helpers/jwt';
import axios from 'axios';
import SideBar from './sidebar';
import Post from '../modelComponents/post';


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

       axios.get('/api/v1/post/getposts')
       .then(res => {
           console.log(res.data);
           this.setState({
               posts: res.data
           });
       })
       .catch(error => {
            console.log(error)
        });
    }

    render() {
        // if(this.state.user === undefined){
        //     return (
        //         <div><h1>Loading</h1></div>
        //     );
        // }
        return(
            <div>
                <h1>Protected Home Screen</h1>
                <SideBar/>
                
                {this.state.posts.map((post, index) => 
                    // <li key={index}>{post.author} {post.location.name} </li>
                    <Post 
                        location={post.location.name}
                        title={post.title}
                        author={post.author}
                        content={post.content}
                        upvotes={post.votes.upVotes}
                        downvotes={post.votes.downVotes}
                        />
                )}
                
            </div>
        );
        
    }
}

export default AuthHome;