import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/notes-mini-app")
        console.log("Connection successful")
    }catch(error){
        throw new Error(error);
    }
}