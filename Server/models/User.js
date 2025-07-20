const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
});
 const Usermodel = mongoose.model("users",UserSchema)
 module.exports = Usermodel;