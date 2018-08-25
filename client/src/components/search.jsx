import React, { PureComponent } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

export default withRouter(
  class Search extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { query: this.props.location.search.slice(1) };
    }

    handleQueryChange = event => {
      this.setState({ query: event.target.value });
    };

    render() {
      const { query } = this.state;

      return (
        <form className="search-form">
          <input className="search-text" placeholder="search Repositories" value={query} onChange={this.handleQueryChange} />
          <Link to={{ pathname: "/", search: query }}>Search</Link>
        </form>
      );
    }
  }
);
