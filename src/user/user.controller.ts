import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

@Controller()
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get("api/users")
  getAllUsers() {
    this.userService.getAll();
  }

  @Post("register")
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDto) {
    this.userService.register(data);
  }

  @Post("login")
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDto) {
    this.userService.login(data);
  }
}
