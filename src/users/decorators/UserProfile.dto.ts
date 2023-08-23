import { ApiProperty } from '@nestjs/swagger';

export class UserProfile {
  @ApiProperty({ description: 'Unique ID of the user' })
  id: number;

  @ApiProperty({ description: 'Username of the user' })
  username: string;

  @ApiProperty({ description: 'Password of the user' })
  password: string;

  @ApiProperty({ description: 'Full name of the user' })
  name: string;

  @ApiProperty({ description: 'Age of the user' })
  age: number;

  @ApiProperty({ description: 'Last login date of the user' })
  lastLoginDate: Date;

  @ApiProperty({ description: 'Authentication token', required: false })
  token?: string;
}
