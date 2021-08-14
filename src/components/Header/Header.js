import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="main-link">
        Books
      </Link>
      <Link to="/Add" className="btn btn-info">
        Add Book
      </Link>
    </div>
  );
};

export default Header;
