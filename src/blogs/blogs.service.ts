import { Injectable, Logger } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger('Blogs Logger');

  create(createBlogDto: CreateBlogDto) {
    try {
      return this.prisma.blog.create({ data: createBlogDto });
    } catch (error) {
      this.logger.error('Error wile creating a new blog');
    }
  }

  findAll() {
    try {
      this.logger.log('Retreiving data for blogs ');
      return this.prisma.blog.findMany({ where: { published: true } });
    } catch (error) {
      this.logger.error('Error while retreiving data');
    }
  }

  findOne(id: number) {
    try {
      this.logger.log(`Retreiving blog with ${id}`);
      return this.prisma.blog.findUnique({ where: { id } });
    } catch (error) {
      this.logger.log(`Error on retrieving data with id ${id}`);
    }
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  remove(id: number) {
    return this.prisma.blog.delete({ where: { id } });
  }

  findDrafts() {
    try {
      this.logger.log('Retreiving data for drafts');
      return this.prisma.blog.findMany({ where: { published: false } });
    } catch (error) {
      this.logger.error('Error while retreiving drafts');
    }
  }
}
