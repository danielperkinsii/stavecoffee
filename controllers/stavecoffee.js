const express = require('express')
const router = express.Router()


// Routes

// test connection route
router.get('/stavecoffee', (req, res)=>{
    res.send('router connected')
})

// 



module.exports = router
