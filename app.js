const express = require('express')
const bodyParser = require('body-parser')
const authorsRoute = require('./Routes/authors')

const app = express()
const PORT = 4000
//middleware
app.use(bodyParser.json())
  

//Express Router for different API Route
app.use('/authors', authorsRoute)



app.listen(PORT, ()=>{
    console.log(`server started sucessfully on ${PORT}`)})