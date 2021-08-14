import React from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./styles.scss";
import "./App.css";
import Home from "./components/Home/Home";
import BookDetails from "./components/Books/BookDetails";
import AddBook from "./components/Books/AddBook";
import EditBook from "./components/Books/EditBook";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Book from "./components/Books/BookDetails";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="NotFound" component={NotFound} />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/works/:id" component={BookDetails}></Route>
          {/* <Route exact path="/works/add" component={AddBook}></Route> */}
          <Route
            exact
            path="/add"
            component={AddBook}
            // render={(props) => (
            //   <AddBook
            //     onAdd={this.addHandler}
            //     books={this.state.books}
            //     {...props}
            //   />
            // )}
          />
          <Route
            exact
            path="/works/:id/edit"
            component={EditBook}
            // render={(props) => (
            // <EditBook
            //     onEdit={this.editHandler}
            // books={this.state.selectedBook}
            // {...props}
            // />
            // )}
          />
          <Redirect to="/NotFound" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
