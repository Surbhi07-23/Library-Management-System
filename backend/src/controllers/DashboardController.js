import Book from "../models/Book.js";
import Issue from "../models/Issue.js";

const getDashboardStats = async (req , res)=>{
    try{
        const totalBooks =  await Book.countDocuments(); // returns a single integer of total unique books

        const activeIssues = await Issue.countDocuments({  //returns count of total active issued books
            status:"ACTIVE"
        })

        const overdueBooks =  await Issue.countDocuments({   //total no of overdues
            status:"ACTIVE",
            dueDate: {$lt : new Date()}
        });

        const books = await Book.find();
        let availableBooks = 0

        books.forEach(book => {
            availableBooks += book.availableCopies    //adds up individual copy counts across all the titles 
        });

        // Book A has 3 copies , Book B has 2 .. totalBooks = 2  (unique) .. availableBooks = 3+2 = 5

        res.status(200).json({
            success:true,
            data: {
                totalBooks,
                activeIssues,
                overdueBooks,
                availableBooks
            }
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export default getDashboardStats;