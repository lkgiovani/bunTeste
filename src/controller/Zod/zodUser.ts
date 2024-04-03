import { z } from "zod";

export const CreateUserZod = z.object({
  name: z.string(),
  age: z.number(),
});

export const GetByIdUserZod = z.object({
  id: z.string(),
});

export const EditUserZod = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
});

export const DeleteUserZod = z.object({
  id: z.string(),
});
