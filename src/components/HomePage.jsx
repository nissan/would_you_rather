import React from "react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";

export class HomePage extends React.Component {
  state = {
    activeTab: "1"
  };
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Unanswered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Answered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <UnansweredQuestions />
          </TabPane>
          <TabPane tabId="2">
            <AnsweredQuestions />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

export default HomePage;
