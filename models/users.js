const mongoose = require('mongoose')
const reviews = require('./reviews.js')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  reviews: [reviews.schema]
})

const User = mongoose.model('User', userSchema)

module.exports = User