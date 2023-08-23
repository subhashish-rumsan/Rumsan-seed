import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BlogsEntity } from './entities/blog.entity';

@Controller('blogs')
@ApiTags('Blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @ApiCreatedResponse({ type: BlogsEntity })
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  @ApiOkResponse({ type: BlogsEntity, isArray: true })
  findAll() {
    return this.blogsService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: BlogsEntity, isArray: true })
  findDrafts() {
    return this.blogsService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: BlogsEntity, isArray: true })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BlogsEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto
  ) {
    return this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BlogsEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.remove(id);
  }
}
