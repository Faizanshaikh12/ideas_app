import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { AuthGuard } from "../shared/auth.guards";
import { User } from "./user.decor";

@Controller()
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get("api/users")
  getAllUsers() {
    return this.userService.getAll();
  }

  @Post("register")
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDto) {
    return this.userService.register(data);
  }

  @Post("login")
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDto) {
    return this.userService.login(data);
  }
}
