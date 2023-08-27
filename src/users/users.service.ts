import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(UsersService.name);

  create(createUserDto: CreateUserDto) {
    try {
      this.logger.log('Creating a user');
      return this.prisma.user.create({ data: createUserDto });
    } catch (error) {
      this.logger.error('Error while creating a user');
    }
  }

  findAll() {
    try {
      this.logger.log('Retrieving all users');
      return this.prisma.user.findMany();
    } catch (error) {}
  }

  findOne(id: number) {
    try {
      this.logger.log(`Finding user with id ${id}`);
      return this.prisma.user.findUnique({ where: { id } });
    } catch (error) {}
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      this.logger.log(`Updating user with id ${id}`);
      return this.prisma.user.update({ where: { id }, data: updateUserDto });
    } catch (error) {}
  }

  remove(id: number) {
    try {
      this.logger.warn(`Deleting user with ${id}`);
      return `This action removes a #${id} user`;
    } catch (error) {}
  }
}
