import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  private readonly logger = new Logger('Users Controller');

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto) {
    this.logger.log(
      `Creating user with data: ${JSON.stringify(createUserDto)}`
    );
    const createdUser = await this.usersService.create(createUserDto);
    this.logger.log(`User created: ${JSON.stringify(createdUser)}`);
    return new UserEntity(createdUser);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    this.logger.log('Fetching all users');
    const users = await this.usersService.findAll();
    this.logger.log(`Fetched ${users.length} users`);
    return users.map((user) => new UserEntity(user));
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`Fetching user with ID: ${id}`);
    const foundUser = await this.usersService.findOne(id);
    this.logger.log(`Fetched user: ${JSON.stringify(foundUser)}`);
    return new UserEntity(foundUser);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UserEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    this.logger.log(
      `Updating user with ID ${id}: ${JSON.stringify(updateUserDto)}`
    );
    const updatedUser = await this.usersService.update(id, updateUserDto);
    this.logger.log(`User updated: ${JSON.stringify(updatedUser)}`);
    return new UserEntity(updatedUser);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`Deleting user with ID: ${id}`);
    const deletedUser = await this.usersService.remove(id);
    this.logger.log(`User deleted: ${JSON.stringify(deletedUser)}`);
    return this.usersService.remove(+id);
  }
}
