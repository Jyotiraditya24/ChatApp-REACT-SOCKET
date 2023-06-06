import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
  },
  userName: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 4,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
