const express = require('express')
const router = express.Router()

router.get('/stavecoffee', (req, res)=>{
    res.send('router connected')
})

module.exports = router
