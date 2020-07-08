const express = require('express')
const router = express.Router()

const Review = require('./models/fruits.js')
// Routes

// test connection route
router.get('/', (req, res)=>{
    res.render('index.ejs')
})

// new review
router.get('/blog', (req, res)=>{
    res.render('reviews.ejs')
})

router.post('/blog', (req,res)=>{
    if (req.body.firstTime === 'on'){
        req.body.firstTime = true
    } else {
        req.body.firstTime = false
    }
})



module.exports = router
