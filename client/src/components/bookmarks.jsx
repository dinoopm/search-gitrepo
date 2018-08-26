import React, { PureComponent } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import List from "../components/list";

export default class Bookmarks extends PureComponent {
  page = "bookmarks";
  componentDidMount() {
    
    const {getBookmarks } = this.props;

    getBookmarks()
        
  }

  render() {
    return (
      <div>
        <Header />
        <main id="main-content">
          <List repositories={this.props.bookmarks.bookmarks} removeBookmark={this.props.removeBookmark} page={this.page} />
        </main>
        <Footer />
      </div>
    );
  }
}
