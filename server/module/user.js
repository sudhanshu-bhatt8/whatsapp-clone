import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    sub : {
        type : String ,
        required : true,
        unique : true
    } , 
    iss:{
        type: String 
    },
    aud : {
        type : String
    } , 
    email : {
        type : String ,
        required : true
    } , 
    name : {
        type : String ,
        required : true
    }, 
    picture : {
        type : String ,
    },
    exp: {
        type : Number
    },
    jti: {
        type : String,
        required : true
    },
    azp: {
        type : String 
    }
})

 const User = mongoose.model("user" , userSchema)

 export default User;