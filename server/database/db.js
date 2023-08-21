import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () =>{
    const url = process.env.MONGOOSE;
    try{
        await mongoose.connect(url , {useUnifiedTopology:true })
       console.log("Database is connected ")
    }catch(err)
    {
        return res.status(500).json({message:err.message})
    }
}

export default connection;