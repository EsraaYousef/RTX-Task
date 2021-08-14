import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API = "http://openlibrary.org/search.json?q=/";

const Book = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  const getBooks = () => {
    axios.get(API + id).then((response) => {
      setDetails(response.data.docs[0]);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xl-8 col-lg-8 col-md-12">
          {details && (
            <div className="card details-card">
              <div className="d-block">
                <h3 className="card-header">{details.title}</h3>
                <Link to="/" className="back-link">
                  Back
                </Link>
              </div>

              <div className="card-body">
                <p>
                  <span className="font-color">
                    {details.author_name || "Unknown author"}
                  </span>
                  <span className="second-color">
                    {details.first_publish_year}
                  </span>
                </p>
                {details.subject && (
                  <p>
                    <span className="font-color">Describe:</span>
                    <span className="second-color">
                      {details.subject.join(", ")}
                    </span>
                  </p>
                )}
                {details.first_sentence && (
                  <p>
                    <span className="font-color">First Sentence:</span>
                    <span className="second-color">
                      {details.first_sentence}
                    </span>
                  </p>
                )}
                <p>
                  <span className="font-color">Edition count:</span>
                  <span className="second-color">{details.edition_count}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
