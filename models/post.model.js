const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    info: {
        type: String
    },
    location: { 
        name: {
            type: String
        }
    },
    votes: {
        upVotes: {
            type: Number
        },
        downVotes: {
            type: Number
        } 
    },
    comments: [{
        text: {
            type: String
        },
        // postedBy: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }
    }]
});

PostSchema.methods.upvote = () => {
    this.upVotes++;
    return this.save();
}

PostSchema.methods.downvote = () => {
    this.downVotes++;
    return this.save();
}

module.exports = mongoose.model('Post', PostSchema);