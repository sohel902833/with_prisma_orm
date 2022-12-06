import {
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
  getCategorys,
} from "./category.controller";
import { Router } from "express";

export const router = Router();

router.get("/", getCategorys);
router.get("/:id", getOneCategory);
router.put("/:id", updateCategory);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);
