const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: String,
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        required: true
    },
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }    
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post