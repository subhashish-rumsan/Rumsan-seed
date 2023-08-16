import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProfile as Users } from './users.interface';
import { Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }
}
