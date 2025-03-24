import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

//import model
import userModel from '../models/User.js';
import UserModel from '../models/User.js';

//initialise router
const router = express.Router();


//handle signup post request
router.post('/signup', async function(req, res) {
    const {username, password, email, firstName, lastName} = req.body; 

    //if username, passord or email missing, the user has fill all the credentials correctly. 
    if(!username || !password || !email){
        res.status(400).send({message: 'Please fill correct credentials'});
        return;
    }

    try {
       
        //username exists
        const existingUserName = await userModel.findOne({username: username });

        // console.log(existingUserName)
        if(existingUserName){
            res.status(400).send({message: "Username is taken"});
            return;
        }
        //find the user by email
        const existingEmail = await userModel.findOne({email: email});
        if (existingEmail){
            res.status(400).send({message: 'Email already taken'});
            return;
        }
        
        //generating hash password
        const hashedPassword = bcrypt.hashSync(password, 10);

        //create new user object
        const newUser = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName, 
            username: username,
            password: hashedPassword,
            email: email
        };
        const newEntry = await userModel.create(newUser);
        res.status(200).send({data: newUser, message: "Sign up successful"})
    } catch (error) {
        console.log(`Failed to signup ${error}`);
        res.status(400).send("Signuped failed")
    }
})

router.post('/login', async function(req, res) {
    const {username, password}  = req.body;

    //check if the user put usernam and password
    if (!username || !password) {
        res.status(400).send({message: "Enter your credentials"});
        return;
    }
    try {
        const existingUser = await UserModel.findOne({username: username});
        console.log(existingUser);
        if (!existingUser){
            res.status(400).send({message: "Account doesn't exist. Please sign up"});
            return;
        }
        //if the user exists 
        const match = await bcrypt.compare(password, existingUser.password);
        if(match){
            res.status(200).send({message: "You are login "});
            return;
        } else {
            res.status(200).send({message: "Incorrect password"})
        }
    } catch (error) {
        console.log(`Error logging in ${error}`)
    }
})

export default router;