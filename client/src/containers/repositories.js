import React from "react";
import { connect } from "react-redux";

import Repositories from "../components/repositories";
import { searchRepositories } from "../actions/repositories";
import { addToBookmark } from "../actions/bookmark";
import { setLoader } from "../actions/loader";

const mapStateToProps = ({ repositories, loader }) => ({
  repositories,
  loader
});

export default connect(
  mapStateToProps,
  { searchRepositories, addToBookmark, setLoader }
)(Repositories);
