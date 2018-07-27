import React, { Component } from 'react';
// import {veniceBG} from '../../images/veniceBG.jpg';

class Post extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiwiP754qHcAhVDhuAKHb7rDqEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.honeymoondreams.co.uk%2Fgreece-honeymoon-packages-thumbnail%2F&psig=AOvVaw3k3fzolMn24Qd_wi-TvDry&ust=1531767018870880" alt="Card image top"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle">{this.props.location}</h6>
                    <p className="card-text">{this.props.content}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Total Votes: {this.props.votes}</small>
                </div>
            </div>
        );
    }

}

const styles ={
    li: {
        width: "20rem"
    }
}

export default Post;