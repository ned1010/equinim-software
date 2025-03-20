import express from 'express';

//import model
import userModel from '../models/User.js';

//initialise router
const router = express.Router();


//handle signup post request
router.post('/signup', async function(req, res) {
    try {
        const {username, password, email, firstName, lastName} = req.body;
        console.log(username, password, email, firstName, lastName)
        // res.send()
    } catch (error) {
        console.log(`Failed to signup ${error}`);
        res.status(400).send("Signuped failed")
    }
})
export default router;