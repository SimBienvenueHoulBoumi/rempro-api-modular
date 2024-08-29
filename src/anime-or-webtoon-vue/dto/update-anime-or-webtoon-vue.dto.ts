import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeOrWebtoonVueDto } from './create-anime-or-webtoon-vue.dto';

export class UpdateAnimeOrWebtoonVueDto extends PartialType(
  CreateAnimeOrWebtoonVueDto,
) {}
