const mongoose = require('mongoose')
const Schema=mongoose.Schema

const contentSchema=new Schema({
    postTitle: {
        type: String,
    },
    category: {
        type: String,
    },
    postContent: {
        type: String,
    },
    thumb: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;