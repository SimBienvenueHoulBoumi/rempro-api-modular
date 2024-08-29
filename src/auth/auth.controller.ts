import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/users/users.service';

import { CreateUserDto } from 'src/users/dto/create-user.dto';

interface ResponseProfile {
  user: CreateUserDto;
  iat: string;
  exp: string;
}

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @ApiOperation({ summary: 'Sign up' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile info' })
  getProfile(@Req() req: ResponseProfile) {
    return req.user;
  }

  @ApiOperation({ summary: 'Sign in user' })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in-user')
  signInUser(@Body() user: CreateUserDto) {
    return this.userService.create(user, 'user');
  }

  @ApiOperation({ summary: 'Sign in admin' })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in-admin')
  signInAdmin(@Body() user: CreateUserDto) {
    return this.userService.create(user, 'admin');
  }
}
