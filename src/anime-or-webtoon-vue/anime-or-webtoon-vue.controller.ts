import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AnimeOrWebtoonVueService } from './anime-or-webtoon-vue.service';
import { CreateAnimeOrWebtoonVueDto } from './dto/create-anime-or-webtoon-vue.dto';
import { UpdateAnimeOrWebtoonVueDto } from './dto/update-anime-or-webtoon-vue.dto';

import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { AuthGuard } from '../auth/auth.guard';

@Controller('anime-or-webtoon-vue')
@ApiTags('anime-or-webtoon-vue')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class AnimeOrWebtoonVueController {
  constructor(
    private readonly animeOrWebtoonVueService: AnimeOrWebtoonVueService,
  ) {}

  @ApiOperation({ summary: 'Create anime or webtoon' })
  @Post()
  create(
    @Request() req,
    @Body() createAnimeOrWebtoonVueDto: CreateAnimeOrWebtoonVueDto,
  ) {
    return this.animeOrWebtoonVueService.create(
      req.user.id,
      createAnimeOrWebtoonVueDto,
    );
  }

  @ApiOperation({ summary: 'Get all anime or webtoon' })
  @Get()
  findAll() {
    return this.animeOrWebtoonVueService.findAll();
  }

  @ApiOperation({ summary: 'Get anime or webtoon by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeOrWebtoonVueService.findOne(id);
  }

  @ApiOperation({ summary: 'Update anime or webtoon by id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimeOrWebtoonVueDto: UpdateAnimeOrWebtoonVueDto,
  ) {
    return this.animeOrWebtoonVueService.update(id, updateAnimeOrWebtoonVueDto);
  }

  @ApiOperation({ summary: 'Delete anime or webtoon by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeOrWebtoonVueService.remove(id);
  }
}
