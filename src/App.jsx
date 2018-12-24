import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Topbar from "./components/Topbar";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Topbar />
          <Switch>
            {isAuthenticated && <Route path="/" component={HomePage} />}
            <Route component={LoginPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export const mapStateToProps = state => {
  console.log(state.authedUser.userId);
  return {
    isAuthenticated: state.authedUser.userId !== 0 ? true : false
  };
};

export default connect(mapStateToProps)(App);
