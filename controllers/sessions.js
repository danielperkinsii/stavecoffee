const express = require('express')
const sessionsRouter = express.Router()

sessionsRouter.get('/new', (req, res)=>{
    res.render('sessions/new.ejs)')
})