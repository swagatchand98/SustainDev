import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    minlength: [3, "username must be at least 3 characters"],
    maxlength: [30, "username cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password must beat least 6 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
