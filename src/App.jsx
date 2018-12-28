import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./components/HomePage";
import AddQuestionPage from "./components/AddQuestionPage";
import LoginPage from "./components/LoginPage";
import LeaderboardPage from "./components/LeaderboardPage";
import ViewQuestionPage from "./components/ViewQuestionPage";
import ErrorPage from "./components/ErrorPage";
import Topbar from "./components/Topbar";
import { routes } from "./utils/";
import { handleLoadUsers } from "./actions/users";
import { handleLoadQuestions } from "./actions/questions";

class App extends Component {
  componentDidMount() {
    const { onLoadUsers, onLoadQuestions } = this.props;
    onLoadUsers();
    onLoadQuestions();
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Topbar />
          <Switch>
            <Route
              path={routes.root}
              exact
              render={props =>
                isAuthenticated ? (
                  <HomePage {...props} />
                ) : (
                  <Redirect to={{ pathname: routes.login }} />
                )
              }
            />
            <Route
              path={routes.addQuestion}
              render={props =>
                isAuthenticated ? (
                  <AddQuestionPage {...props} />
                ) : (
                  <Redirect to={{ pathname: routes.login }} />
                )
              }
            />
            <Route
              path={`${routes.questions}:id`}
              render={props =>
                isAuthenticated ? (
                  <ViewQuestionPage {...props} />
                ) : (
                  <Redirect to={{ pathname: routes.login }} />
                )
              }
            />

            <Route
              path={routes.leaderboard}
              render={props => <LeaderboardPage {...props} />}
            />
            <Route
              path={routes.login}
              render={props =>
                isAuthenticated ? (
                  <Redirect to={{ pathname: routes.root }} />
                ) : (
                  <LoginPage {...props} />
                )
              }
            />
            <Route component={ErrorPage} />
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
    },
    onLoadQuestions: () => {
      dispatch(handleLoadQuestions());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
