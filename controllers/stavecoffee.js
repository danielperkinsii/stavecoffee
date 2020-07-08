const express = require('express')
const router = express.Router()

const Review = require('../models/reviews.js')

// Routes

// test connection route
router.get('/', (req, res)=>{
    res.render('index.ejs')
})

// new review
router.get('/blog', (req, res)=>{
    Review.find({}, (err, allReviews)=>{
        res.render('reviews.ejs', {
        reviews: allReviews
        })
    })
})  

// create route
router.post('/blog', (req,res)=>{
    if (req.body.firstTime === 'on'){
        req.body.firstTime = true
    } else {
        req.body.firstTime = false
    }
    Review.create(req.body, (err, createdReview)=>{
        res.redirect('/blog')
    })
})

// show route
router.get('/blog/:id', (req, res)=>{
    Review.findById(req.params.id, (err, foundReview)=>{
        res.render('show.ejs', {
            reviews: foundReview
        })
    })
})

// delete route
router.delete('/blog/:id', (req, res)=>{
    Review.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/blog')
    })
})

// edit routes
router.get('/blog/:id/edit', (req, res)=>{
    Review.findById(req.params.id, (err, foundReview)=>{
        res.render(
            'edit.ejs',
                {
                    reviews: foundReview
                }
        )
    })
})

router.put('/blog/:id', (req, res)=>{
    if (req.body.firstTime === 'on'){
        req.body.firstTime = true
    } else {
        req.body.firstTime = false
    }
    Review.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel)=>{
        res.redirect('/blog')
    })
})

module.exports = router
