import { Test, TestingModule } from '@nestjs/testing';
import { AnimeOrWebtoonVueService } from './anime-or-webtoon-vue.service';

describe('AnimeOrWebtoonVueService', () => {
  let service: AnimeOrWebtoonVueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeOrWebtoonVueService],
    }).compile();

    service = module.get<AnimeOrWebtoonVueService>(AnimeOrWebtoonVueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
