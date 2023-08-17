import { Controller, Version } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProfile as Users } from './users.interface';
import { Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Version('2')
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }
}
