import React from "react";
import Book from "./Book";

const BooksResult = (books) => {
  console.log("books", books);
  return (
    <div className="row">
      {books.books.map((book) => (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6" key={book.key}>
          <Book books={books} book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksResult;
