import { z } from "zod";

export const createUserZod = z.object({
  name: z.string(),
  age: z.number(),
});
