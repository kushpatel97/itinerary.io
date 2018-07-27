import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../modelComponents/post';

class AllPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allPosts: []
         };
        //  this.displayPosts = this.displayPosts.bind(this);
    }

    componentDidMount(){
        axios.get('/api/v1/post/getposts')
        .then(res => {
            this.setState({
                allPosts: res.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    displayPosts(){
        // this.state.allPosts.map((post,index) => 
        //     <Post title={post.title}/>
        // );
        console.log(this.state);
    }


    render() {
        return (
            <div className="card-columns">
                <h2 className="h2">All Posts</h2>
                {/* {this.displayPosts()} */}
                {/* {this.displayPosts()} */}
                {this.state.allPosts.map((post,index) => 
                    <Post
                    key={index}
                    title={post.title}
                    location={post.location.name}
                    content={post.content}
                    votes={post.votes}/>
                )}
            </div>    
        );
    }
}

export default AllPosts;