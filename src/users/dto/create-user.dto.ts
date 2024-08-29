import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'username' })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({ description: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
