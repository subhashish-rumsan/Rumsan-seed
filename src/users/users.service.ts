import { Injectable } from '@nestjs/common';
import { UserProfile as Users } from './users.interface';
@Injectable()
export class UsersService {
  private readonly users: Users[] = [];

  create(users: Users) {
    this.users.push(users);
  }

  findAll(): Users[] {
    return this.users;
  }
}
