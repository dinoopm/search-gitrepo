import React from "react";
import { connect } from "react-redux";

import Repositories from "../components/repositories";
import { searchRepositories } from "../actions/repositories";
import { addToBookmark } from "../actions/bookmark";

const mapStateToProps = ({ repositories }) => ({
  repositories
});

export default connect(
  mapStateToProps,
  { searchRepositories, addToBookmark }
)(Repositories);
