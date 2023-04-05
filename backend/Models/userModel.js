import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phoneNo: String,
    password: String,
    personalDetails: {
        aadhar: String,
        panCard: String,
    },
    bankDetails: {
        cardNo: String,
        cvv: Number,
        Expiry: String,
    }
});

const userDetails = mongoose.model('userDetails', userSchema);

export default userDetails;

