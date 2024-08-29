import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto, role: string): Promise<Users> {
    const saltOrRounds = 10;
    const user = new Users();

    user.username = createUserDto.username;
    user.password = await bcrypt.hash(createUserDto.password, saltOrRounds);

    user.role = role.toLowerCase() === 'admin' ? 'admin' : 'user';
    user.createdAt = new Date().toISOString();
    user.updatedAt = new Date().toISOString();

    return this.usersRepository.save(user);
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async findOneByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<Users | null> {
    const user = await this.usersRepository.findOneBy({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    updateUserDto.updatedAt = new Date().toISOString();
    await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
