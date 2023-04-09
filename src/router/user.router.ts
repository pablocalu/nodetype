import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UserController>{
    constructor(){
        super(UserController)
    }
}