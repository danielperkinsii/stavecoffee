const express = require('express')
const bcrypt = require('bcrypt')
const sessionsRouter = express.Router()
const User = require('../models/users')

sessionsRouter.get('/new', (req, res)=>{
    res.render('sessions/new.ejs', {
    currentUser: req.session.currentUser
    })
})

sessionsRouter.post('/', (req, res)=>{
    // Look for a user with the requested username
    User.findOne({username: req.body.username}, (err, foundUser)=>{
        if (err) {
            console.log(err)
            res.send('opps, the database had a problem')
        } else if (!foundUser) {
            // let user know that no user exists with that username
            res.send('<a href="/">Sorry, user not found.</a>')
        } else {
            // compare the found user's password against the input password
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                // if correct, set the session information
                req.session.currentUser = foundUser
                res.redirect('/')
            } else {
                // let the user know if the password is incorrect
                res.send('<a href="/">Password does not match.</a>')
            }
        }
    })
})

sessionsRouter.delete('/', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

module.exports = sessionsRouter