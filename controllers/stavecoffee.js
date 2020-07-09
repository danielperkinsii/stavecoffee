const express = require('express')
const router = express.Router()

const Review = require('../models/reviews.js')

// access restriction middleware
const isAuthenticated = (req, res, next)=>{
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Routes

// // seed route
// router.get('/blog/seed', (req, res)=>{
//     Review.create([
//         {
//             title: 'coffee good',
//             review: 'coffee is good',
//             name: 'Good Coffee Guy',
//             firstTime: true
//         },
//         {
//             title: 'coffee okay',
//             review: 'coffee is okay',
//             name: 'Okay Coffee Guy',
//             firstTime: true
//         },
//         {
//             title: 'coffee bad',
//             review: 'coffee is bad',
//             name: 'Bad Coffee Guy',
//             firstTime: true
//         }
//     ], (err, data)=>{
//         res.redirect('/blog')
//     }
//     )
// })

// index route
router.get('/', (req, res)=>{
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    })
})

// Guatemala
router.get('/guatemala', (req, res)=>{
    res.render('products/guatemala.ejs', {
        currentUser: req.session.currentUser
    })
})

// Peru
router.get('/peru', (req, res)=>{
    res.render('products/peru.ejs', {
        currentUser: req.session.currentUser
    })
})

// new review
router.get('/blog', isAuthenticated, (req, res)=>{
    Review.find({}, (err, allReviews)=>{
        res.render('reviews.ejs', {
        reviews: allReviews, 
        currentUser: req.session.currentUser
        })
    })
})  

// create route
router.post('/blog', isAuthenticated, (req,res)=>{
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
router.get('/blog/:id', isAuthenticated, (req, res)=>{
    Review.findById(req.params.id, (err, foundReview)=>{
        res.render('show.ejs', {
            reviews: foundReview,
            currentUser: req.session.currentUser
        })
    })
})

// delete route
router.delete('/blog/:id', isAuthenticated, (req, res)=>{
    Review.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/blog')
    })
})

// edit routes
router.get('/blog/:id/edit', isAuthenticated, (req, res)=>{
    Review.findById(req.params.id, (err, foundReview)=>{
        res.render(
            'edit.ejs',
                {
                    reviews: foundReview,
                    currentUser: req.session.currentUser
                }
        )
    })
})

router.put('/blog/:id', isAuthenticated, (req, res)=>{
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
