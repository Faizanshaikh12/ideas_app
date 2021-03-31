import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';
import { UserEntity } from "../user/user.entity";
import { CommentEntity } from "../comment/comment.entity";
import { CommentService } from "../comment/comment.service";

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity, CommentEntity])],
  controllers: [IdeaController],
  providers: [IdeaService, CommentService],
})
export class IdeaModule {}
