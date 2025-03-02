import mongoose from "mongoose";

const schema = mongoose.Schema;

const coin = new schema({
  coin: Number,
  transictionTime: {
    type: Date,
    default: Date.now
  },
});

const wasteCollection = new schema({
  plastic: Number,
  paper: Number,
  metal: Number,
  glass: Number,
  eWaste: Number,
  textile: Number,
});

const userAddress = new schema({
  house: {
    type: String,
    required: [true, "house no. or building name is required !"],
    trim: true
  },
  area: {
    type: String,
    required: [true, "Area name or any landmark is required !"],
    trim: true
  },
  town: {
    type: String,
    required: [true, "Town or village name is required !"],
    trim: true
  },
  state: {
    type: String,
    required: [true, "state name is required !"],
    trim: true
  },
  pincode: {
    type: Number,
    required: [true, "Pincode is required !"],
    trim: true
  },
})

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
  },
  wallet: [coin],
  wasteCollectionHistory: [wasteCollection],
  adress: userAddress


});

const userModel = mongoose.model("users", userSchema);

export default userModel;
