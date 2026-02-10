const express = require('express')
const app = express()
app.use(logger)

app.use(express.urlencoded({ extended: true })); // to get data from form use this middleware
app.use(express.json()); // to get data from json use this middleware


app.set('view engine', 'ejs')

// app.use(express.static('public'))    // access html / css  file in public folder

// app.get('/', (req, res) => {
//   res.render('sample') // render the ejs file  use render 
// } )


// app.get('/', (req, res) => {
//   res.render('sample')
// } )


// app.get('/user', (req, res) => {
//   res.send('user page')
// })

// app.get('/user/new', (req, res) => {
//   res.send('user  new page')
// })

const userRouter = require('./routes/users')
app.use('/users', userRouter)  
const aboutRouter = require('./routes/about')
app.use('/about', aboutRouter)  
const parsRouter = require('./routes/pars')
app.use('/pars', parsRouter)
 
 
function logger (req, res, next) {
  console.log(req.originalUrl)
  next()
} 

// middleware print in url in console

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
}) 