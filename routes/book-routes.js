import express from "express";
import {
  getAllBooks,
  getSingleBookbyId,
  addNewBook,
  updateBook,
  deleteBook
} from "../controllers/book-controller.js";
const router = express.Router()

router.get("/get", getAllBooks);
router.get("/get/:id",getSingleBookbyId);
router.post("/add",addNewBook)
router.put("/update/:id",updateBook)
router.delete("/delete/:id",deleteBook)

export default router;