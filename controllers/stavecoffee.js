const express = require('express')
const router = express.Router()


// Routes

// test connection route
router.get('/', (req, res)=>{
    res.render('index.ejs')
})

// new review
router.get('/blog', (req, res)=>{
    res.render('reviews.ejs')
})



module.exports = router
