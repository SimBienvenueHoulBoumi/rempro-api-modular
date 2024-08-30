import { Module } from '@nestjs/common';
import { AnimeOrWebtoonVueService } from './anime-or-webtoon-vue.service';
import { AnimeOrWebtoonVueController } from './anime-or-webtoon-vue.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimeOrWebtoonVue } from './entities/anime-or-webtoon-vue.entity';
import { Users } from '../users/entities/users.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([AnimeOrWebtoonVue, Users])],
  controllers: [AnimeOrWebtoonVueController],
  providers: [AnimeOrWebtoonVueService, AuthGuard, JwtService],
})
export class AnimeOrWebtoonVueModule {}
