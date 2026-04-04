import express from "express"

const app = express();
const port = 3000;

const books = [
    {
    id:1,
    name:"book1",
    },
    {
    id:2,
    name:"book2",
    },
    {
    id:3,
    name:"book3",
    }
]


app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"Welcome to home"})
})

app.get("/books",(req,res)=>{
    res.json(books)
})

app.get("/books/:id",(req,res)=>{
    const book = books.find(item=>item.id==req.params.id);
    if(book){
        res.status(200).json(book)
    } else{
        res.status(404).json({message:"Book not found"})
    }
})

app.post("/add",(req,res)=>{
    const newBook = {
        id:books.length + 1,
        title:`Book ${books.length+1}`
    }
    books.push(newBook)
    res.status(200).json({
        data:newBook,
        message:'New Book is added'
    })
})

app.put("/update/:id",(req,res)=>{
    const findCurrentBook = books.find(bookItem=>bookItem.id==req.params.id)
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title

        res.status(200).json({message:"book id updated",data:findCurrentBook})
    } else{
        res.status(404).json({message:"Book not found"})
    }
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})