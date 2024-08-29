import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAnimeOrWebtoonVueDto {
  @ApiProperty({ description: 'anime name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'anime video plateform' })
  @IsString()
  @IsNotEmpty()
  platform: string;

  @ApiProperty({ description: 'anime video progression' })
  @IsString()
  @IsNotEmpty()
  progression: string;
}
