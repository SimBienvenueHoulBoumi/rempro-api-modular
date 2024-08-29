import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnimeOrWebtoonVueDto } from './dto/create-anime-or-webtoon-vue.dto';
import { UpdateAnimeOrWebtoonVueDto } from './dto/update-anime-or-webtoon-vue.dto';
import { Repository } from 'typeorm';
import { AnimeOrWebtoonVue } from './entities/anime-or-webtoon-vue.entity';
import { Users } from '../users/entities/users.entity';

@Injectable()
export class AnimeOrWebtoonVueService {
  constructor(
    @InjectRepository(AnimeOrWebtoonVue)
    private animeOrWebtoonVueRepository: Repository<AnimeOrWebtoonVue>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(
    userId: string,
    createAnimeOrWebtoonVueDto: CreateAnimeOrWebtoonVueDto,
  ) {
    const animeOrWebtoonVue = new AnimeOrWebtoonVue();
    animeOrWebtoonVue.name = createAnimeOrWebtoonVueDto.name;
    animeOrWebtoonVue.createdAt = new Date().toISOString();
    animeOrWebtoonVue.updatedAt = new Date().toISOString();

    const user = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    animeOrWebtoonVue.user = user;
    return this.animeOrWebtoonVueRepository.save(animeOrWebtoonVue);
  }

  findAll() {
    return this.animeOrWebtoonVueRepository.find();
  }

  findOne(id: string) {
    return this.animeOrWebtoonVueRepository.findOneBy({ id });
  }

  update(id: string, updateAnimeOrWebtoonVueDto: UpdateAnimeOrWebtoonVueDto) {
    this.animeOrWebtoonVueRepository.update(id, updateAnimeOrWebtoonVueDto);
  }

  remove(id: string) {
    this.animeOrWebtoonVueRepository.delete(id);
  }
}
