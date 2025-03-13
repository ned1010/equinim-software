//importing the express module/package 
const express = require('express')

//instanace of express 
//calling the express function
const app = express()

const port = 3000


//GET handler
app.get('/', function(req, res){
    res.send("Hi there, you have handled GET request")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})