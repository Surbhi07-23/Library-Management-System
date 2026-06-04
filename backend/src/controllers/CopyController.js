import Book from "../models/Book.js";
import Copy from "../models/Copy.js";

const addCopy = async(req , res) => {
    console.log(req.body);
    try{
        const { bookId , copyCode} = req.body;
        
        const book = await Book.findById(bookId);

        if(!book){
            return res.status(404).json({
                success : false,
                message :"Book not found!"
            })
        };

        const copy = await Copy.create({
            book : bookId,
            copyCode
        });

        book.totalCopies +=1;
        book.availableCopies +=1;

        await book.save();

        res.status(201).json({
            success :true,
            data : copy
        });

    } catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        });
    }
};

const getAllCopies = async(req,res) => {
    try{
        const copies = await Copy.find().populate("book");   //finds all copies .. mongoose jumps over to the Book collection and find every detail

        res.status(200).json({
            success : true,
            data : copies
        })
    } catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export {addCopy , getAllCopies};