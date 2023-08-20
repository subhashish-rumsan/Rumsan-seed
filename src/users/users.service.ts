import { Injectable, Logger } from '@nestjs/common';
import { UserProfile as Users } from './users.interface';
@Injectable()
export class UsersService {
  private readonly logger = new Logger('User services');

  private readonly users: Users[] = [
    {
      username: 'johnDoe123',
      password: 'password123',
      name: 'John Doe',
      age: 30,
      lastLoginDate: new Date('2023-01-01T10:30:00'),
      token: 'token1',
    },
    {
      username: 'aliceSmith456',
      password: 'password456',
      name: 'Alice Smith',
      age: 25,
      lastLoginDate: new Date('2023-01-15T15:45:00'),
      token: 'token2',
    },
    {
      username: 'bobJohnson789',
      password: 'password789',
      name: 'Bob Johnson',
      age: 28,
      lastLoginDate: new Date('2023-02-01T12:15:00'),
      token: 'token3',
    },
  ];

  findAll(): Users[] {
    try {
      this.logger.log(`Retrieved all users`);
      return this.users;
    } catch (error) {
      this.logger.error(error);
      throw new Error(error);
    }
  }
}
