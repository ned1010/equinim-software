import express from 'express';
import {v4 as uuidv4} from 'uuid';
import postModel from '../models/Post.js'

//instance of express router
const router = express.Router();
//handle request to create a new post
//new-post
//localhost3000 - /
router.post('/new-post', async function(req, res){
    // console.log(req)
    //destructing
    const {title, content} = req.body
    // console.log(title)
    // console.log(content)
    if (!title || !content){
        res.status(400).send({message: 'Please add title and content'})
    }
    try {
        //handle if the request is successful
        const newPost = {
            id: uuidv4(),
            title: title,
            content: content,
            date: new Date()
        };
        //add this new post to the database
        const newPostCreated = await postModel.create(newPost);
        res.status(200).send({data: newPostCreated, message: "You have created a new post"})
    } catch (error) {
        console.log(`Error creating a new post ${error}`);
        res.status(500).send({message: "Post not created. Error!"})
    }
});


//response to the get method to get all the posts
router.get('/get-posts', async function(req, res) {
    try {
        const posts = await postModel.find({});
        res.status(200).send({data: posts, message: 'fetched posts successfully'})
        
    } catch (error) {
        console.log(`Error fetching the posts ${error}`);
        res.status(500).send({message: "Error in feching posts"})
    }

});

router.delete('/delete-post/:id', async function(req, res) {
    try {
        const id = req.params.id;
        const deletePost = await postModel.deleteOne({id: id});
        res.status(200).send({data: deletePost, message: "Post successfully deleted"});
    } catch (error) {
        console.log(`Error deleting a post ${error}`)
        res.status(500).send({message: "Delete request failed"})
    }
})

router.put('/update-post/:id', async function(req, res){
    //destructuring 
    console.log(req.body)
    const {title, content} = req.body;
    console.log(title, content)
    try {
        //getting the id of the post you want to update
        const id = req.params.id;
        
        //filter to update the forum
        const filter = {id: id};

        //new title and content
        const updatePost = {
            title: title, 
            content: content
        }
        const updatedItem = await postModel.findOneAndUpdate(filter, updatePost, {new: true});
        res.status(200).send({data: updatedItem, message: 'successfully updated'})
    } catch (error) {
        console.log(`Error updating the forum ${error}`)
    }
})

export default router;

