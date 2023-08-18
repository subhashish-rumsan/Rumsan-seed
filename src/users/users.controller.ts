import { Controller, Version } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProfile } from './decorators/UserProfile.dto';
import { UserProfile as Users } from './users.interface';
import { Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Version('2')
  @ApiOkResponse({
    type: [UserProfile],
    description: 'Retrieve a list of users.',
  })
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }
}
