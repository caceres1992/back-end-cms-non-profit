import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) {

    }

    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books
    }

    async createBook(book: Book): Promise<Book> {
        const res = await this.bookModel.create(book);
        return res
    }
    async findBookById(bookId: string): Promise<Book> {
        const getBook = await this.bookModel.findById(bookId);
       return getBook
    }
    async updateBook(book: Book, bookId: string): Promise<Book> {
        const getBook = await this.bookModel.findByIdAndUpdate(bookId, book, 
            { new:true,
            runValidators: true });
       return getBook
    }
}
