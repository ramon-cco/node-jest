import { Router } from "express";
import { UserController } from "./controller/usersController";


const routes = Router();
const userController = new UserController()

routes.get('/users', userController.listarUsuario)

routes.post('/users', userController.criarUsuario)

export {routes};
