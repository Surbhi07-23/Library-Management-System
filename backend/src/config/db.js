import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");
    } catch(error){
        console.log("database connection failed!",error.message);
        process.exit(1);  //forces the Node.js process to terminate synchronously
    }
};

export default connectDB;