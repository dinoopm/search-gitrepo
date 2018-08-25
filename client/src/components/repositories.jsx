import React, { PureComponent } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import List from "../components/list";

export default class Repositories extends PureComponent {
  state = { query: "", fetched: false };

  static getDerivedStateFromProps(props, state) {
    const query = props.location.search.slice(1);

    if (query !== state.query) {
      return { query, fetched: false};
    }
    return null;
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
      searchRepositories
    } = this.props;
    search &&
      searchRepositories(search.slice(1)).then(() => {
        this.setState({ fetched: true });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <main id="main-content">
          <List repositories={this.props.repositories} addToBookmark={this.props.addToBookmark}/>
        </main>
        <Footer />
      </div>
    );
  }
}
