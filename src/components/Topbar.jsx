import React from "react";
import { connect } from "react-redux";
import {routes} from '../utils';

import TopbarButton from "./TopbarButton";
const Topbar = props => {
  const { isAuthenticated } = props;
  return (
    <React.Fragment>
      <TopbarButton to={routes.root}>Home</TopbarButton>

      {isAuthenticated && (
        <TopbarButton to={routes.addQuestion}>New Question</TopbarButton>
      )}

      <TopbarButton to={routes.leaderboard}>Leaderboard</TopbarButton>

      {isAuthenticated && <TopbarButton to={routes.logout}>Logout</TopbarButton>}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authedUserId !== "" ? true : false
  };
};

export default connect(mapStateToProps)(Topbar);
