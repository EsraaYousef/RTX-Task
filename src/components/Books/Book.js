import React from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../../../src/logo192.png";

const Books = ({ book, books }) => {
  return (
    <div className="card books-card">
      <h2 className="card-header">
        <Link to={`${book.key}`}>{book.title}</Link>
      </h2>
      <Link to={`${book.key}/edit`}>EDIT</Link>
      <span className="light">{book.first_publish_year}</span>
      <h6>By: {book.author_name}</h6>
      {book.isbn && (
        <img
          className="card-image"
          src={
            `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg` ||
            ImagePlaceholder
          }
          alt={book.title_suggest}
        />
      )}
    </div>
  );
};

export default Books;
