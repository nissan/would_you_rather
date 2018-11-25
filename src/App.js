import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPollQuestionPage from "./components/Pages/AddPollQuestionPage";
import Homepage from "./components/Pages/Homepage";
import LeaderboardPage from "./components/Pages/LeaderboardPage";
import LoginPage from "./components/Pages/LoginPage";
import QuestionsPage from "./components/Pages/QuestionsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/questions">
            <QuestionsPage />
          </Route>
          <Route path="/leaderboard">
            <LeaderboardPage />
          </Route>
          <Route path="/add">
            <AddPollQuestionPage />
          </Route>
          <Route component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
