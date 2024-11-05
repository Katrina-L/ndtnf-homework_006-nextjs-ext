/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [];

  create(book) {
    this.books.push(book);
  }

  findAll() {
    return this.books;
  }
}
