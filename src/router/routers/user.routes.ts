import { Router } from "express";
import UserController from "../../controller/UserController/UserController";

const userController = UserController;

const userRouter = Router();

userRouter.post("/create", userController.createUser);

userRouter.get("/getAll");

userRouter.put("/getById");

userRouter.post("/edit");

userRouter.delete("/delete");

export { userRouter };
