import Book from "../models/book.js";

// GET ALL
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks?.length > 0) {
      return res.status(200).json({
        success: true,
        message: "List of books fetched",
        data: allBooks,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No Book found in data",
      });
    }
  } catch (error) {
    console.log(error); // ✅ fixed
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// GET SINGLE
export const getSingleBookbyId = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book with current Id not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (error) {
    console.log(error); // ✅ fixed
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// ADD
export const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    return res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newlyCreatedBook,
    });
  } catch (error) {
    console.log(error); // ✅ fixed
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// UPDATE (you left this empty — not acceptable)
export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if (!deletedBook) { // ✅ fixed
      return res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      data: deletedBook,
    });
  } catch (error) {
    console.log(error); // ✅ fixed
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};