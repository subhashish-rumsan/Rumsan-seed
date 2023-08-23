import { Controller, HttpException, HttpStatus, Version } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProfile } from './decorators/UserProfile.dto';
import { UserProfile as Users } from './users.interface';
import { Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

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
  @ApiBadRequestResponse({
    description: 'Bad request',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden',
  })
  async findAll(): Promise<Users[]> {
    try {
      return this.usersService.findAll();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
