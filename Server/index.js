const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require("./models/User");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/getUsers", (req, res)=> {
    Usermodel.find({}).then(function(user) {
        res.json(user);
    }).catch(function(err){
        res.json(err)
    })
});
app.post("/createUser", async(req, res)=>{
    const user=req.body;
    const newUser=new Usermodel(user);
    await newUser.save();
    res.json(user);
})

app.delete("/deleteUser", (req, res)=>{
    const name=req.body.name;
    Usermodel.findOneAndDelete(name).then(function() {
        res.json("user deleted successfully");
    }).catch(function(error){
        res.json(error);
    })
})
mongoose.connect(process.env.MONGO_URL);




app.listen(process.env.PORT, () => {
    console.log("server is running");
})