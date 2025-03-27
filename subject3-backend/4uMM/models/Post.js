import mongoose, { mongo } from 'mongoose'

//post schema
const postSchema = mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true}
});


//model
const postModel = mongoose.model('posts', postSchema);

export default postModel;