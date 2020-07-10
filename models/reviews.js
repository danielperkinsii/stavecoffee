const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {type: String, required: true},
    review: {type: String, required: true},
    name: {type: String, required: true},
    firstTime: Boolean,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
	favs:  Number
	
},
{timestamps: true},)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review