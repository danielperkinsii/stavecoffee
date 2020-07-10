const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {type: String, required: true},
    review: {type: String, required: true},
    name: {type: String},
    firstTime: Boolean,
    comments: [
        {
            type: mongoose.ObjectId,
            ref: 'Comment'
        },
    ],
	favs:  Number
	
},
{timestamps: true},
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review