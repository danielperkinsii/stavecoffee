const express = require('express')
const router = express.Router()


// Routes

// test connection route
router.get('/', (req, res)=>{
    res.render('index.ejs')
})

// new review
router.get('/stavecoffee', (req, res)=>{
    res.send('leave us a review!')
})



module.exports = router
