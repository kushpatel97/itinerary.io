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
    content: {
        type: String
    },
    location: { 
        name: {
            type: String
        }
    },
    votes: {
        type: Number,
        default: 0
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
    this.votes++;
    return this.save();
}

PostSchema.methods.downvote = () => {
    this.votes--;
    return this.save();
}

module.exports = mongoose.model('Post', PostSchema);