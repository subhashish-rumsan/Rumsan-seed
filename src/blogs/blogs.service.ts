import { Injectable, Logger } from '@nestjs/common';
// import { CreateBlogDto } from './dto/create-blog.dto';
// import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger('Blogs Logger');

  // create(createBlogDto: CreateBlogDto) {
  //   return 'This action adds a new blog';
  // }

  findAll() {
    try {
      this.logger.log('Retreiving data for blogs ');
      return this.prisma.blog.findMany({ where: { published: true } });
    } catch (error) {
      this.logger.error('Error while retreiving data');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  // update(id: number, updateBlogDto: UpdateBlogDto) {
  //   return `This action updates a #${id} blog`;
  // }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
