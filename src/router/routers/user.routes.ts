import { Router } from "express";
import UserController from "../../controller/UserController/UserController";

const userController = UserController;

const userRouter = Router();

userRouter.post("/create", userController.createUser);

userRouter.get("/getAll", userController.getAllUser);

userRouter.put("/getById", userController.getByIdUser);

userRouter.post("/edit", userController.editUser);

userRouter.delete("/delete", userController.deleteUser);

export { userRouter };
