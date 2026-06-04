import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            Required : true
        },

        author : {
            type : String,
            Required : true,
        },

        isbn : {
            type : String,
            unique : true,
        },

        category : {
            type  : String,
        },

        totalCopies : {
            type : Number,
            default : 0,
        },

        availableCopies : {
            type : Number ,
            default : 0,
        },
    },
    {
        timestamps : true,
    }
);

export default mongoose.model("Book" , bookSchema);