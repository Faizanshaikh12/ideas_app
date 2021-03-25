import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDto } from './idea.dto';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
  ) {}

  async getAll() {
    return await this.ideaRepository.find();
  }

  async create(data: IdeaDto) {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async read(id: string){
    return await this.ideaRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<IdeaDto>) {
    await this.ideaRepository.update({ id }, data);
    return await this.ideaRepository.findOne({ id });
  }

  async delete(id: string) {
    await this.ideaRepository.delete({ id });
    return { deleted: true };
  }
}
