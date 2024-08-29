import { AnimeOrWebtoonVue } from '../../anime-or-webtoon-vue/entities/anime-or-webtoon-vue.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(
    () => AnimeOrWebtoonVue,
    (animeOrWebtoonVue) => animeOrWebtoonVue.user,
  )
  animeOrWebtoonVues: AnimeOrWebtoonVue[];

  @Column()
  role: string;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
