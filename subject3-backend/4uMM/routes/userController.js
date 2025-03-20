import express from 'express';

//router method in express that enables to define routes for the application
const router = express.Router()

//import userModel
import UserModel from '../models/User.js';

//response to a get request from a client (browser or postman)
router.get('/users', async function(req, res) {
    try {
        //get request from client
        //corresponding database operation (CRUD)
        const users = await UserModel.find({})
        // console.log(users);
        res.send(users)
    } catch (error) {
        console.log(`Error fetching users`);
    }
})

export default router;