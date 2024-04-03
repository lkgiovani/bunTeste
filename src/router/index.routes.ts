import { Router } from "express";
import { userRouter } from "./routers/user.routes";

const routes = Router();

routes.use("/user", userRouter);

routes.get("/", (req, res) => {
  res.status(200).json({ oi: "salve" });
});

export { routes };
