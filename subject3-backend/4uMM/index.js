import express from 'express';

//instance of express 
const app = express();

//port number
const port = 3000;

//middlware 
app.use(express.json()) //parse the request in json format

//response to a get request from a client (browser or postman)

//listening
app.listen(port, function(){
    console.log(`Listening to port ${port}`)
})