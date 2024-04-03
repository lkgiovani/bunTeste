import type { Request, Response } from "express";

import { z } from "zod";
import { UserClass } from "../../model/UserClass/UserClass";
import {
  CreateUserZod,
  DeleteUserZod,
  EditUserZod,
  GetByIdUserZod,
} from "../Zod/zodUser";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const createUser = CreateUserZod.parse(req.body);

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
  async getAllUser(req: Request, res: Response) {
    try {
      const response = await UserClass.getAll();

      if (response.length < 1)
        return res.status(404).json({ message: "User não encontrado" });

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
  async getByIdUser(req: Request, res: Response) {
    try {
      const getByIdUser = GetByIdUserZod.parse(req.body);

      const response = await UserClass.getById(getByIdUser.id);

      if (!response)
        return res.status(404).json({ message: "User não encontrado" });

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
  async editUser(req: Request, res: Response) {
    try {
      const createUser = EditUserZod.parse(req.body);

      const response = await UserClass.edit(
        createUser.id,
        createUser.name,
        createUser.age
      );

      if (!response)
        return res.status(404).json({ message: "User não encontrado" });

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
  async deleteUser(req: Request, res: Response) {
    try {
      const createUser = DeleteUserZod.parse(req.body);

      const response = await UserClass.delete(createUser.id);

      if (!response)
        return res.status(404).json({ message: "User não encontrado" });

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
}

export default new UserController();
