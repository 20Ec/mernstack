const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.send('user page')
})

router.get('/new',(req,res)=>{
  res.render('users/new', { fn: '' })
})  

router.post( '/',(req,res)=>{
    // res.send("create user")
    console.log( req.body.fn) 
    res.send(`hello ${req.body.fn}`)
})

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router 