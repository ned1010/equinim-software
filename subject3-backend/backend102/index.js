// import superheroes from 'superheroes';

// console.log(superheroes[1]);

import express from 'express';
import path from 'path'

//creating an instance of express
const app = express()

const PORT = 3000;

//find the path of the folder
const __dirname = import.meta.dirname;

// app.use(express.static(path.join(__dirname, 'backend102')))
//Response to a get request
// Express methods
//1. get methods: arguments - (endpoint, function)
app.get('/', function(req, res){
    res.send("hello world")
})

app.get('/get-my-file', function(req, res){
    // res.send("this is my file")

    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(PORT, function(){
    console.log(`Listening to port number ${PORT}`)
})


//Local URL: http://localhost:3000