import Book from "../models/Book.js";

//creating a book
const createBook = async(req , res) => {
    try{
        const book = await Book.create(req.body);    // take user inout and add it to the mongoose databse as a doc

        res.status(201).json({
            success : true,
            message : "Book created successfully",
            data : book
        });
    } catch(error){
        res.status(500).json({
            status: false ,
            message : error.message
        });
    } ;
}

//getting all  bpooks
const getBook = async(req,res) => {
    try{
        const books = await Book.find();   //find all inside the Books collection

        res.status(200).json({
            success : true,
            count : books.length,
            data : books
        });

    } catch(error){
        res.status(500).json({
            success : false,
            message : error.message,
        });
    }
}

export {createBook ,  getBook};