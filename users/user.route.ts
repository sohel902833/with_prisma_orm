import {
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  getUsers,
  createAddress,
  getAddress,
} from "./user.controller";
import { Router } from "express";

export const router = Router();

router.get("/", getUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

//adress routers
router.post("/address", createAddress);
router.get("/address", getAddress);
