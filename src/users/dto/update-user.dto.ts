import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ description: 'username' })
  @IsString()
  @IsNotEmpty()
  username: string;

  updatedAt: string;
}
