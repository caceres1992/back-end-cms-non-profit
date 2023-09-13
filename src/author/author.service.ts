import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './entities/author.entity';
import mongoose from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name)
    private authorModel: mongoose.Model<Author>
  ) { }
  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = await this.authorModel.create(createAuthorDto)
    return newAuthor;
  }

  async findAll(): Promise<Author[]> {
    return await this.authorModel.find()
  }

  async findOne(id: string): Promise<Author> {
    const foundAuthor = await this.authorModel.findById(id);
    return foundAuthor;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const _authorUpdated = await this.authorModel.findByIdAndUpdate(id, updateAuthorDto, { new: true, runValidators: true })
    return _authorUpdated;
  }

 async remove(id: string):Promise<void> {

   await this.authorModel.findByIdAndRemove(id)
  }
}
