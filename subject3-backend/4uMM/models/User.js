import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

//take this schema and create a model
const UserModel = mongoose.model("users", userSchema);

export default UserModel;
