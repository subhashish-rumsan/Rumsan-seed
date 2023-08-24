// src/articles/entities/article.entity.ts

import { Blog } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BlogsEntity implements Blog {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  userId: number | null;
}
