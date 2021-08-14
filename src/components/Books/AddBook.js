import React from "react";
import { Link } from "react-router-dom";

class AddBook extends React.Component {
  state = {
    bib_key: Math.floor(Math.random() * 1000),
    info_url: "",
    preview_url: "",
    thumbnail_url: "",
  };

  // AddNewBook = () => {
  //   //My own Validation Functions
  //   let newBookObject = {
  //     bib_key: this.state.bib_key,
  //     info_url: this.state.info_url,
  //     preview_url: this.state.preview_url,
  //     thumbnail_url: this.state.thumbnail_url,
  //   };
  //   //Calling APi Request For Adding
  //   var bKeyISBN = ["0201558025"];
  //   fetch(
  //     `https://openlibrary.org/api/books?bibkeys=ISBN:${bKeyISBN}&format=json`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newBookObject),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((red) => console.log("Saving"))
  //     .catch((Error) => console.log("Error"));
  //   this.props.history.push("/books");
  // };
  validateName = (e) => {
    if (e.target.value === "") {
      alert("Data Required");
    } else {
      this.setState({ bib_key: e.target.value });
    }
    //
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted !!");
    this.props.history.push("/");
  };
  //Redirect List

  render() {
    return (
      <div className="container">
        <div className="box-w-shadow w-mr-40">
          <h3 className="main-title">Add Book Form</h3>
          <form>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">bib key</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value="bib key"
                    name="bib_key"
                    id="bib_key"
                    onChange={this.validateName}
                    onBlur={this.validateName}
                    disabled
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">info_url</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="info_url"
                    value={this.state.info_url}
                    onChange={(e) =>
                      this.setState({ info_url: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">
                    preview_url
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    id="preview_url"
                    value={this.state.preview_url}
                    onChange={(e) =>
                      this.setState({ preview_url: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label form-label-sm">
                    thumbnail_url
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="trackName"
                    value={this.state.thumbnail_url}
                    onChange={(e) =>
                      this.setState({ thumbnail_url: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="form-group text-center">
              <button
                type="button"
                className="btn btn-main"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          <Link to="/">Back To List</Link>
        </div>
      </div>
    );
  }
}
export default AddBook;
