import mongoose from 'mongoose';
const schema = mongoose.Schema;

const objectId = schema.objectId;

const user = new schema({

    name : String,
    email : {type : String, unique : true},
    password : String
})

const pickup = new schema({

    trash : {

        plastic : Number,
        paper : Number,
        metal : Number,
        glass : Number,
        eWaste : Number
    },
    adress : {

        fullName : String,
        mobileNumber : Number,
        town : String,
        pincode : Number,
        district : String,
        detailAdress : String,
        country : String,
        state : String     
    }
})

const userModel = mongoose.model('users', user);
const pickupModel = mongoose.model('pickupDetail', pickup);

export default {userModel, pickupModel};
