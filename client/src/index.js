import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RepositoriesPage from "./containers/repositories";
import BookmarkPage from "./containers/bookmarks";


import registerServiceWorker from "./registerServiceWorker";
import "./styles/style.scss";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={RepositoriesPage} />
        <Route path="/bookmarks" component={BookmarkPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
