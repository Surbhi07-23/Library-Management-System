import mongoose from "mongoose";

const copySchema = new mongoose.Schema({
    book : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book",
        required : true,
    },

    copyCode : {
        type  : String,
        required : true,
        unique : true,
    },

    status : {
        type : String,
        enum : ["AVAILABLE" , "ISSUED"],
        default : "AVAILABLE",
    },
},
{
    timestamps : true,
}
);

export default mongoose.model("Copy" , copySchema);