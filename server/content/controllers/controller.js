import csv from "csv-parser";
import fs from "fs";
import Book from "../models/book.js";
import { getIo } from "../utils/socket.js";

export const topContent = async (req, res) => {
  try {
    const books = await Book.find();

    books.sort((firstBook, secondBook) => {
      if (firstBook.likes.length > secondBook.likes.length) {
        return -1;
      } else if (firstBook.likes.length < secondBook.likes.length) {
        return 1;
      } else {
        return 0;
      }
    });

    return res.status(200).json({ books });
  } catch (error) {
    return res.status(500).json({ messgae: "Error Occured" });
  }
};

export const addData = async (req, res) => {
  try {
    const file = req.file;

    const results = [];

    fs.createReadStream(file.path)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", async () => {
        for (let i = 0; i < results.length; i++) {
          try {
            const book = new Book({
              title: results[i].title,
              story: results[i].story,
            });

            const addedBook = await book.save();
          } catch (error) {
            console.log(error);
          }
        }

        return res.status(200).json({ message: "Books created" });
      })
      .on("error", (err) => {
        return res.status(500).json({ message: "Error occured" });
      });
  } catch (error) {
    return res.status(500).json({ messgae: "Error Occured" });
  }
};

export const likeBook = async (req, res) => {
  try {
    const { userID, bookID } = req.body;

    const book = await Book.findById(bookID);

    const likes = book.likes;

    if (!likes.includes(userID)) {
      likes.push(userID);

      const updatedBook = await Book.findByIdAndUpdate(
        bookID,
        { likes },
        { new: true }
      );

      const io = getIo();
      io.emit("like", {
        action: "BOOKLIKED",
        payload: updatedBook,
      });

      return res.status(200).json({ message: "Book liked" });
    } else
      return res.status(200).json({ message: "Book already liked by user" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ messgae: "Error Occured" });
  }
};

export const unlikeBook = async (req, res) => {
  try {
    const { userID, bookID } = req.body;

    const book = await Book.findById(bookID);

    let likes = book.likes;

    if (likes.includes(userID)) {
      likes = likes.filter((user) => user !== userID);

      const updatedBook = await Book.findByIdAndUpdate(
        bookID,
        { likes },
        { new: true }
      );

      const io = getIo();
      io.emit("unlike", {
        action: "BOOKUNLIKED",
        payload: updatedBook,
      });

      return res.status(200).json({ message: "Book unliked" });
    } else
      return res.status(200).json({ message: "Book already unliked by user" });
  } catch (error) {
    return res.status(500).json({ messgae: "Error Occured" });
  }
};
