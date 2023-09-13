import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './entities/blog.entity';
import mongoose from 'mongoose';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private blogModel: mongoose.Model<Blog>
  ) { }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const res = await this.blogModel.create(createBlogDto)
    return res;
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find()
  }
  async findOne(id: string): Promise<Blog> {
    const foundBlog = await this.blogModel.findById(id)
    return foundBlog
  }
  async findAllBlogsByAuthorId(id: string): Promise<Blog[]> {

    const authorBlogs = await this.blogModel.find({ authorId: id })
    return authorBlogs
  }
  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const _blog = await this.blogModel.findByIdAndUpdate(id, updateBlogDto, { new: true, runValidators: true })
    return _blog;
  }

  async remove(id: string): Promise<void> {
    await this.blogModel.findByIdAndRemove(id)
  }
}
