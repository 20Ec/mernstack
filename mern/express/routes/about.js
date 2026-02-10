const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.send(' about page')
})

router.get('/new',(req,res)=>{
  res.send('about new page')
})  

function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router 