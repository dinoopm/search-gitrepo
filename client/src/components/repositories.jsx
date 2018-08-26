import React, { PureComponent } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import List from "../components/list";
import Loader from "../components/loader";

export default class Repositories extends PureComponent {
  state = { query: "", fetched: false };

  static getDerivedStateFromProps(props, state) {
    const query = props.location.search.slice(1);

    if (query !== state.query) {
      return { query, fetched: false };
    }
    return { query, fetched: true };
  }

  componentDidMount() {
    this.fetchRepositories();
  }

  componentDidUpdate() {
    !this.state.fetched && this.fetchRepositories();
  }

  fetchRepositories() {
    const {
      location: { search },
      searchRepositories,
      setLoader
    } = this.props;
    search && setLoader(true);
    searchRepositories(search.slice(1))
      .then(() => {
        this.setState({ fetched: true });
      })
      .then(() => setLoader(false));
  }

  onAddBookmarks = (id) => {
    const { addToBookmark, setLoader } = this.props;
    setLoader(true);
    addToBookmark(id).then(() => setLoader(false))

  }

  render() {
    return (
      <div>
        <Header />
        <main id="main-content">
          <List
            repositories={this.props.repositories}
            addToBookmark={this.onAddBookmarks}
          />
          <Loader loader={this.props.loader} />
        </main>
        <Footer />
      </div>
    );
  }
}
