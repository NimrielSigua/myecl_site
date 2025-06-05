import mongoose from "mongoose";

const connectMongoDB = async () => {
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Log the URI for debugging

    try{
        await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected successfully") // Corrected spelling

    }catch (error){
        console.log("Connection error:", error) // Added more context to the error log

    }
};
    
export default connectMongoDB;
