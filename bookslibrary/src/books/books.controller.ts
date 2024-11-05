/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() book) {
    this.booksService.create(book);
    return book;
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }
}
