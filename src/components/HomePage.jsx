import React from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
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
    const { user} = this.props;
    return (
      <React.Fragment>
        Welcome {user.name} <Avatar picture={user.avatarURL} name={user.name} />{" "}
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
const mapStateToProps = state => {
  return {
    user: state.users.find(user=>user.id===state.authedUserId),
    questions: state.questions
  };
};

export default connect(mapStateToProps)(HomePage);
