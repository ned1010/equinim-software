import express from 'express'; //ESM import format
// const express = require("express") //COMMON JS
import mongoose from 'mongoose';
import cors from 'cors';

//import all the routes
import userRoute from './routes/userController.js';
import authRoute from './routes/authController.js'
import postRoute from './routes/postController.js'
//instance of express 
const app = express();

//port number
const port = 3000;

//middlware 
app.use(express.json()) //parse the request in json format
app.use(cors("*")) //allow access from all domains and all methods

//Add the all routes
app.use(userRoute);
app.use(authRoute);
app.use(postRoute)


//MONDB CONNECTION
const connectionString = 'mongodb+srv://ned1010:Equinim12345@cluster0.ubded.mongodb.net/4umm'


//connecting mongodb
mongoose.connect(connectionString).then(function() {
    console.log("connected database");
    //start your server only after connecting to the database
    //listening
    app.listen(port, function(){
        console.log(`Listening to port ${port}`)
    })
})
