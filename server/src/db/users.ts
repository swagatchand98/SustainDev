import mongoose, { Document } from "mongoose";

const schema = mongoose.Schema;

export interface Icoin {
  coin: Number,
  transictionTime: Date,
}

export interface IwasteCollection {
  plastic: Number,
  paper: Number,
  metal: Number,
  glass: Number,
  eWaste: Number,
  textile: Number,
}

export interface IuserAddress {
  house: String,
  area: String,
  town: String,
  state: String,
  pincode: Number,
}

export interface Iuser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  wallet: Icoin[];
  wasteCollectionHistory: IwasteCollection[];
  address: IuserAddress;
}

const coin = new schema<Icoin>({
  coin: {
    type: Number,
  },
  transictionTime: {
    type: Date,
    default: Date.now,
  },
});

const wasteCollection = new schema<IwasteCollection>({
  plastic: {
    type: Number,
    default: 0,
    min: 0
  },
  paper: {
    type: Number,
    default: 0,
    min: 0
  },
  metal: {
    type: Number,
    default: 0,
    min: 0
  },
  glass: {
    type: Number,
    default: 0,
    min: 0
  },
  eWaste: {
    type: Number,
    default: 0,
    min: 0
  },
  textile: {
    type: Number,
    default: 0,
    min: 0
  },
});

const userAddress = new schema<IuserAddress>({
  house: {
    type: String,
    required: [true, "house no. or building name is required !"],
    trim: true,
  },
  area: {
    type: String,
    required: [true, "Area name or any landmark is required !"],
    trim: true,
  },
  town: {
    type: String,
    required: [true, "Town or village name is required !"],
    trim: true,
  },
  state: {
    type: String,
    required: [true, "state name is required !"],
    trim: true,
  },
  pincode: {
    type: Number,
    required: [true, "Pincode is required !"],
    trim: true,
    min: [100000, "pincode must be 6 digits !"],
    max: [999999, "pincode must be 6 digits !"]
  },
});

const userSchema = new schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    minlength: [3, "username must be at least 3 characters"],
    maxlength: [30, "username cannot exceed 30 characters"],
    index: true
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
    index: true
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password must beat least 6 characters"],
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  wallet: [coin],
  wasteCollectionHistory: [wasteCollection],
  adress: userAddress,
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
