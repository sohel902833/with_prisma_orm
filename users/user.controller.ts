import { Request, Response } from "express";

import * as userService from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json(newUser);
};
export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};
export const getOneUser = (req: Request, res: Response) => {};
export const updateUser = (req: Request, res: Response) => {};
export const deleteUser = (req: Request, res: Response) => {};

//adress controllers

export const createAddress = async (req: Request, res: Response) => {
  const newAddress = await userService.createAddress(req.body);
  return res.status(201).json(newAddress);
};
export const getAddress = async (req: Request, res: Response) => {
  console.log("HERE")
  const address = await userService.getAddress();
  res.status(200).json(address);
};
