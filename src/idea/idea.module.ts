import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';
import { UserEntity } from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity])],
  providers: [IdeaService],
  controllers: [IdeaController],
})
export class IdeaModule {}
