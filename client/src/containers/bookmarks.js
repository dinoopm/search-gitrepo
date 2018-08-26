import React from "react";
import { connect } from "react-redux";

import Bookmarks from "../components/bookmarks";
import { getBookmarks,removeBookmark } from "../actions/bookmark";
import { setLoader } from "../actions/loader";

const mapStateToProps = ({ bookmarks }) => ({
  bookmarks
});

export default connect(
  mapStateToProps,
  { getBookmarks,removeBookmark,setLoader }
)(Bookmarks);