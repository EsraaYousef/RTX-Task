import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const API = `https://openlibrary.org/works/${id}.json`;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        let book = {
          ...response.data,
          author: response.data.authors[0].author.key,
          created: response.data.created.value,
        };
        setBook(book);
      })
      .catch((err) => console.log(err));
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted !!");
    // this.props.history.push("/");
    // if (!book.key || !book.key) return;
    // this.props.addBook(book);
    // setBook();
  };

  return (
    <div className="container">
      <div className="box-w-shadow w-mr-40">
        {book && (
          <form>
            <h3 className="main-title">Edit: </h3>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">ID</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="key"
                    name="key"
                    value={book.key}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">Title</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="title"
                    id="title"
                    value={book.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">Author</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="authors"
                    name="author"
                    //value={book.authors.author}
                    value={book.author}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">Published</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="created"
                    name="created"
                    value={book.created.substring(0, 10)}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control form-control-sm textarea"
                    id="description"
                    name="description"
                    value={book.description?.value || book.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group text-center">
              <button
                type="button"
                className="btn btn-main"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        )}

        <Link to="/">Back To List</Link>
      </div>
    </div>
  );
};
export default EditBook;
