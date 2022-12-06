import { prisma } from "../config";

export const createUser = (user: any) => {
  return prisma.user.create({
    data: user,
  });
};
export const getUsers = () => {
  return prisma.user.findMany();
};
export const getOneUser = (id: string) => {};
export const updateUser = (id: string, data: any) => {};
export const deleteUser = (id: string) => {};

//address services

export const createAddress = (address: any) => {
  return prisma.address.create({ data: address });
};
export const getAddress = () => {
  return prisma.address.findMany();
};
