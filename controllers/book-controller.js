import bookSchema from "../models/book.js";
const getAllBooks = async(req,res)=>{


}

const getSingleBookbyId = async(req,res)=>{

}

const addNewBook = async(req,res)=>{
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData)
        if(newlyCreatedBook){
            res.status(201).json({success:true,message:'Book added successfully',data:newlyCreatedBook})
        }
        
    } catch (e) {
        console.error();
        
        
    }
}

const updateBook = async(req,res)=>{

}
const deleteBook = async(req,res)=>{

}
export default {getAllBooks,getSingleBookbyId,addNewBook,updateBook,deleteBook};