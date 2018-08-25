import React from "react";
import { connect } from "react-redux";

import Bookmarks from "../components/bookmarks";
import { getBookmarks,removeBookmark } from "../actions/bookmark";

const mapStateToProps = ({ bookmarks }) => ({
  bookmarks
});

export default connect(
  mapStateToProps,
  { getBookmarks,removeBookmark }
)(Bookmarks);