import {
  Body,
  Controller,
  Get,
  Post, Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/users')
  getAllUsers(@Query('page') page: number) {
    return this.userService.getAll(page);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDto) {
    return this.userService.register(data);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDto) {
    return this.userService.login(data);
  }
}
