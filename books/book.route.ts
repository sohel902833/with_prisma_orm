import {
  createBook,
  getOneBook,
  updateBook,
  deleteBook,
  getBooks,
} from "./book.controller";
import { Router } from "express";

export const router = Router();

router.get("/", getBooks);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.post("/", createBook);
router.delete("/:id", deleteBook);
