const express = require('express')
const mongoose = require('mongoose')

const app = express();
const connect = () =>{
    return mongoose.connect()
};
// user

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    middleName: { typr: String, required: false},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true },
    address : {type: String, required: true },
    

});

const user =mongoose.model("user",userSchema);







app.listen(5000, () => {
    try{
        connect()
    }catch(err){
        console.log(err)
    }
    console.log("listen to port 5000")
})