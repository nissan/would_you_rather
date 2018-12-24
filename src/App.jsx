import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddQuestionPage from "./components/AddQuestionPage";
import LoginPage from "./components/LoginPage";
import LeaderboardPage from "./components/LeaderboardPage";
import Topbar from "./components/Topbar";
import { routes } from "./utils/";
import { handleLoadUsers } from "./actions/users";


class App extends Component {
  componentDidMount() {
    const { onLoadUsers } = this.props;
    onLoadUsers();
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Topbar />
          <Switch>
            {isAuthenticated && (
              <React.Fragment>
                <Route path={routes.root} exact component={HomePage} />
                <Route path={routes.addQuestion} component={AddQuestionPage} />
                <Route path={routes.leaderboard} component={LeaderboardPage} />
              </React.Fragment>
            )}
            <Route path={routes.leaderboard} component={LeaderboardPage} />
            <Route component={LoginPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export const mapStateToProps = state => {
  return {
    isAuthenticated: state.authedUserId !== "" ? true : false
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onLoadUsers: () => {
      dispatch(handleLoadUsers());
      return;
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
