import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) { }
    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }
    @Post()
    async createBook(@Body() book: CreateBookDto): Promise<Book> {
        return this.bookService.createBook(book)
    }
 
    @Get('findBook/:bookId')
    async getBookById(@Param('bookId') bookId: string): Promise<Book> {
        return this.bookService.findBookById(bookId)
    }

    @Put(':bookId')
    async updateBook(@Param('bookId') bookId: string, @Body() book: CreateBookDto): Promise<Book> {
        return this.bookService.updateBook(book, bookId)
    }
}
