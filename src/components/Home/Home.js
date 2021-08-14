import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import Sort from "../Sort/Sort";
import BooksResult from "../Books/BooksResult";

const SearchAPI = "http://openlibrary.org/search.json?title=";

const Home = () => {
  const localSearchItem = localStorage.getItem("search");
  const [searchItem, setSearchItem] = useState(localSearchItem || "");
  const [books, setBooks] = useState();
  const [loader, setLoader] = useState(false);
  const [activeStep, setActiveStep] = useState(0 || 0);
  const [pages, setPages] = useState([]);
  const [numPages, setNumPages] = useState(0);
  // const [sortList, setSortList] = useState(0);

  const getBooks = async () => {
    let response = await axios.get(SearchAPI + searchItem);
    setBooks(response);
    setNumPages(Math.ceil(response.data.docs.length / 25));
    setLoader(false);
  };

  useEffect(() => {
    if (books) {
      let num = books.data.docs.slice(activeStep * 25, activeStep * 25 + 25);
      setPages(num);
    }
  }, [books, activeStep]);

  const inputHandler = (e) => {
    setSearchItem(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    getBooks();
    localStorage.setItem("search", searchItem);
    setActiveStep(0);
  };

  useEffect(() => {
    if (localSearchItem) {
      setLoader(true);
      getBooks();
    }
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === numPages) {
        return prevActiveStep;
      }
      return prevActiveStep + 1;
    });
    scrollToTop();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return prevActiveStep;
      }
      return prevActiveStep - 1;
    });
    scrollToTop();
  };

  const handlePage = (page) => {
    setActiveStep(page - 1);
    scrollToTop();
  };

  const sortByTitleAsc = (e) => {
    e.preventDefault();
    // console.log("Before sorting", books.data.docs);
    let orderedBooks = [...books.data.docs];
    orderedBooks.sort((a, b) => {
      let bookA = a.title.toLowerCase();
      let bookB = b.title.toLowerCase();
      if (bookA < bookB) {
        return -1;
      } else if (bookA > bookB) {
        return 1;
      }
      return 0;
    });
    let x = { data: {} };
    x.data.docs = orderedBooks;
    setBooks(x);
    // console.log("orderedBooks", orderedBooks);
  };

  const sortByTitleDesc = (e) => {
    e.preventDefault();
    let orderedBooks = [...books.data.docs];
    orderedBooks.sort((a, b) => {
      let bookA = a.title.toLowerCase();
      let bookB = b.title.toLowerCase();
      if (bookA > bookB) {
        return -1;
      } else if (bookA < bookB) {
        return 1;
      }
      return 0;
    });
    let x = { data: {} };
    x.data.docs = orderedBooks;
    setBooks(x);
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  //

  return (
    <div className="home main-wrapper">
      <div className="container">
        <div className="top-wrapper">
          <h2>Find Your Favorite Book</h2>
          <form onSubmit={submitHandler}>
            <div className="form-group d-flex">
              <input
                className="form-control"
                type="text"
                value={searchItem}
                onChange={inputHandler}
              />
              <button className="btn btn-main btn-hover">search</button>
            </div>
          </form>
        </div>

        {loader ? (
          <Loader />
        ) : (
          books && (
            <React.Fragment>
              {console.log("pages", pages)}
              <p className="counter">Available Books: {books.data.numFound}</p>
              <Sort
                books={pages}
                ascSort={sortByTitleAsc}
                descSort={sortByTitleDesc}
                results={pages}
              />
              <BooksResult books={pages} book={books.data.docs} />
              <Pagination
                next={handleNext}
                back={handleBack}
                page={handlePage}
                numPages={numPages}
                activeStep={activeStep}
              />
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
