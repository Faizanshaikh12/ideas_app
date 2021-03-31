import {
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { User } from '../user/user.decor';
import { CommentEntity } from '../comment/comment.entity';

@Entity('idea')
export class IdeaEntity {
  map(arg0: (comment: any) => { author: import('../user/user.dto').UserRO; id: string; created: Date; comment: String; idea: IdeaEntity; }) {
    throw new Error('Method not implemented.');
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn() //{ type: 'timestamp' }
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column('text')
  idea: string;

  @Column('text')
  description: string;

  @ManyToOne(type => UserEntity, author => author.ideas)
  author: UserEntity;

  @ManyToMany(type => UserEntity, { cascade: true })
  @JoinTable()
  upvotes: UserEntity[];

  @ManyToMany(type => UserEntity, { cascade: true })
  @JoinTable()
  downvotes: UserEntity[];

  @OneToMany(type => CommentEntity, comment => comment.idea, { cascade: true })
  comments: CommentEntity[];
}
