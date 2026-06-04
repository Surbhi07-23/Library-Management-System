import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    studentName : {
        type : String,
        required : true,
    },

    studentId : {
        type : String,
        required : true,
    },

    book : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book",
        required : true,
    },

    copy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Copy",
        required : true,
    },

    issueDate : {
        type : Date,
        required : true ,
    },
    dueDate : {
        type : Date,
        required : true,
    },
    returnDate :  {
        type : Date,
    },
    status : {
        type : String ,
        enum : ["ACTIVE" , "RETURNED"],
        default : "ACTIVE",
    },
},
{
    timestamps : true,
}
);

export default mongoose.model("Issue"  , issueSchema);