import type { Request, Response } from "express";
import { createUserZod } from "../Zod/zodUser";
import { z } from "zod";
import { UserClass } from "../../model/UserClass/UserClass";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const createUser = createUserZod.parse(req.body);

      const response = await UserClass.create(createUser.name, createUser.age);

      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Tratamento de erros de validação
        if (process.env.DEBUG === "true") {
          console.error("Erros de validação:", error.errors);
        }

        return res.status(401).json(error.errors);
      } else {
        if (process.env.DEBUG === "true") {
          console.error("Erros de validação:", error);
        }
        return res.status(401).json(error);
      }
    }
  }

  async getAllUser() {}
  async getByIdUser() {}
  async editUser() {}
  async deleteUser() {}
}

export default new UserController();
