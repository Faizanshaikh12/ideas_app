import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IdeaService } from './idea.service';
import { IdeaDto } from "./idea.dto";

@Controller('idea')
export class IdeaController {

  constructor(private ideaService: IdeaService) {
  }

  @Get()
  getAllIdea() {
    return this.ideaService.getAll();
  }

  @Post()
  createIdea(@Body() data: IdeaDto) {
    return this.ideaService.create(data);
  }

  @Get(':id')
  readIdea(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaService.delete(id);
  }
}
