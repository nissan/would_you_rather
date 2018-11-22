import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import LoginPage from "./components/Pages/LoginPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
