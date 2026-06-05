import Book from "../models/Book.js";
import Copy from "../models/Copy.js";
import issue from "../models/Issue.js";
import Issue from "../models/Issue.js";

const issueBook = async (req,res) => {
    try{
        const{
            studentName,
            studentId,
            bookId,
            copyId,
            issueDate,
            dueDate
        } = req.body;

        const copy = await Copy.findById(copyId);

        console.log("COPY =", copy);

        if(!copy){
            res.status(404).json({
                success : false ,
                message : "Copy not found!"
            });
        }

        if(copy.status != "AVAILABLE"){
            return res.status(400).json({
                success : false,
                message : "Copy Already Issued"
            })
        }

        const issue = await Issue.create({    //adding the data in Issue collection
            studentName,
            studentId,
            book : bookId,
            copy : copyId,
            issueDate,
            dueDate
        });
        copy.status = "ISSUED";
        await copy.save();

        const book = await Book.findById(bookId);    //changing the count of issued book
    console.log("BOOK =", book);

        if(!book){
            return res.status(404).json({
                success:false,
                message:"Book not found"
            });
        }
        book.availableCopies -= 1;
        await book.save();

        res.status(200).json({
            success:true,
            message : "Book Issued Successfully",
            data : issue
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
};

const getAllIssues = async(req,res) => {
    try{
        const issues = await Issue.find().populate("book").populate("copy");

        res.status(200).json({
            success:true,
            count:issues.length,
            data:issues
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const returnBook = async(req , res) => {
    try{
        // issued book --> returned book
        const {issueId} = req.params;

        const issue = await Issue.findById(issueId);

        if(!issue){
            return res.status(404).json({
                success : false,
                message : "Issue record not found!"
            });
        }

        if(issue.status == "RETURNED"){
            return res.status(400).json({
                success : false,
                message:"Book already returned"
            });
        }

        issue.status = "RETURNED";
        issue.returnDate = new Date();

        await issue.save();

        //copy status : Issued --> Available
        const copy =  await Copy.findById(issue.copy);
        copy.status = "AVAILABLE";
        await copy.save();

        //increase no of available copies
        const book = await Book.findById(issue.book);
        book.availableCopies += 1;
        await book.save();

        res.status(200).json({
            success : true,
            message : "Book returned successfullly!",
            data : issue
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
};

//to get all issued books with status : active
const getActiveIssues = async(req,res) => {
    try{
        const issues = await Issue.find({status : "ACTIVE"}).populate("book").populate("copy");

        res.status(200).json({
            success:true,
            count : issues.length,
            data : issues
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message:error.message
        })
    }
};

const getOverdueBooks = async (req,res) => {
    try{
        const today = new Date();

        const overdue = await Issue.find({
            status : "ACTIVE",
            dueDate : {$lt : today}    // if duedate was yesterday (which is less than today) it will be considered overdue
        }).populate("book").populate("copy");

        res.status(200).json({
            success : true,
            count : overdue.length,
            data : overdue
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message:error.message
        })
    }
}

const getStudentIssues = async(req,res) => {
    try{
        const issues = await Issue.find({
            studentId : req.params.studentId,
            status: "ACTIVE"
        }).populate("book").populate("copy");

        res.status(200).json({
            success:true,
            count:issues.length,
            data:issues
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message : error.message
        })
    }
}


export {issueBook , getAllIssues ,returnBook , getActiveIssues , getOverdueBooks  , getStudentIssues};