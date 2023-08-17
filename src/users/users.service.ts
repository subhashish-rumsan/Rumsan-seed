import { Injectable, Logger } from '@nestjs/common';
import { UserProfile as Users } from './users.interface';
@Injectable()
export class UsersService {
  private readonly users: Users[] = [];

  private readonly logger = new Logger(UsersService.name);

  create(users: Users) {
    this.users.push(users);
  }

  findAll(): Users[] {
    try {
      this.logger.log(`Retrieved all users`);
      return this.users;
    } catch (error) {
      // this.logger.error(error);
      throw new Error(error);
    }
  }
}
