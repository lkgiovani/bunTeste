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
  static async getAll() {
    return prisma.user.findMany({});
  }
  static async getById(id: string) {
    return prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  }
  static async edit(id: string, name: string, age: number) {
    const exist = await this.getById(id);

    if (!exist) {
      return undefined;
    }

    return prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        age,
      },
    });
  }
  static async delete(id: string) {
    const exist = await this.getById(id);

    if (!exist) {
      return undefined;
    }

    return prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
