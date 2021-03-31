import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { IdeaEntity } from "../idea/idea.entity";
import { UserEntity } from "../user/user.entity";
import { CommentEntity } from "./comment.entity";
import { IdeaService } from "../idea/idea.service";

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, IdeaEntity, UserEntity])],
  controllers: [CommentController],
  providers: [CommentService, IdeaService]
})
export class CommentModule {}
