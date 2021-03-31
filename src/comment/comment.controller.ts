import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post, Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { User } from '../user/user.decor';
import { CommentDto } from './comment.dto';
import { AuthGuard } from '../shared/auth.guards';

@Controller('api/comments')
export class CommentController {
  constructor(private commentService: CommentService) {
  }

  @Get(':id')
  showComment(@Param('id') id: string) {
    return this.commentService.show(id);
  }

  @Get('idea/:id')
  showCommentByIdea(@Param('id') idea: string, @Query('page') page: number) {
    return this.commentService.showByIdea(idea, page);
  }


  @Get('user/:id')
  showCommentByUser(@Param('id') user: string, @Query('page') page: number) {
    return this.commentService.showByUser(user, page);
  }

  @Post('idea/:id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createComment(
    @Param('id') idea: string,
    @User('id') user: string,
    @Body() data: CommentDto,
  ) {
    return this.commentService.create(idea, user, data);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  destroyComment(@Param('id') id: string, @User('id') user: string) {
    return this.commentService.delete(id, user);
  }

}
