import { prisma } from "./../../prismaClient/client";

export class UserClass {
  static async create(name: string, age: number) {
    return prisma.user.create({
      data: {
        name,
        age,
      },
    });
  }
  async getAll() {}
  async getById() {}
  async edit() {}
  async delete() {}
}
