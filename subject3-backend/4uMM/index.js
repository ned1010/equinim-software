import express from 'express';
import mongoose from 'mongoose';

//import all the routes
import userRoute from './routes/userController.js';
import authRoute from './routes/authController.js'

//instance of express 
const app = express();

//port number
const port = 3000;

//middlware 
app.use(express.json()) //parse the request in json format


//Add the all routes
app.use(userRoute);
app.use(authRoute);


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
