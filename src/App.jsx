import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleLoadQuestions } from "./actions/questions";
import { handleLoadUsers } from "./actions/users";
import AddQuestionPage from "./components/AddQuestionPage";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import LeaderboardPage from "./components/LeaderboardPage";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Topbar from "./components/Topbar";
import ViewQuestionPage from "./components/ViewQuestionPage";
import { routes } from "./utils/";

class App extends Component {
  componentDidMount() {
    const { onLoadUsers, onLoadQuestions } = this.props;
    onLoadUsers();
    onLoadQuestions();
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Topbar />
          <Switch>
            <PrivateRoute path={routes.root} exact component={HomePage} />
            <PrivateRoute
              path={routes.addQuestion}
              component={AddQuestionPage}
            />
            <PrivateRoute
              path={`${routes.questions}:id`}
              component={ViewQuestionPage}
            />

            <PrivateRoute
              path={routes.leaderboard}
              component={LeaderboardPage}
            />
            <Route path={routes.login} component={LoginPage} />
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
