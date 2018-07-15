import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className="card">
                <h1 className="card-header">{this.props.location}</h1>
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <h2>{this.props.author}</h2>
                    <h2>{this.props.content}</h2>
                    <h6 className="card-link">{this.props.upvotes}</h6>
                    <h6 className="card-link">{this.props.downvotes}</h6>
                </div>
            </div>
        );
    }

}

const styles ={
    li: {
        width: "80%"
    }
}

export default Post;