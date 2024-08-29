import { Module } from '@nestjs/common';
import { AnimeOrWebtoonVueService } from './anime-or-webtoon-vue.service';
import { AnimeOrWebtoonVueController } from './anime-or-webtoon-vue.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimeOrWebtoonVue } from './entities/anime-or-webtoon-vue.entity';
import { Users } from '../users/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimeOrWebtoonVue]),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AnimeOrWebtoonVueController],
  providers: [AnimeOrWebtoonVueService],
})
export class AnimeOrWebtoonVueModule {}
