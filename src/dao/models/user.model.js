import mongoose from "mongoose";

const userCollection = "Users";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String }
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;