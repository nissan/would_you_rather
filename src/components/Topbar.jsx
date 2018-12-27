import React from "react";
import { connect } from "react-redux";
import { routes } from "../utils";
import Avatar from "./Avatar";
import { Container, Row, Col, Button } from "reactstrap";
import { logoutUser } from "../actions/authedUser";

import TopbarButton from "./TopbarButton";
const Topbar = props => {
  const { user, isAuthenticated, onLogoutUser } = props;
  return (
    <Container fluid>
      <Row>
        <Col>
          <TopbarButton to={routes.root}>Home</TopbarButton>
        </Col>
        {isAuthenticated && (
          <Col>
            <TopbarButton to={routes.addQuestion}>New Question</TopbarButton>
          </Col>
        )}
        <Col>
          <TopbarButton to={routes.leaderboard}>Leaderboard</TopbarButton>
        </Col>
        {isAuthenticated && (
          <React.Fragment>
            <Col>
              {" "}
              <Avatar picture={user.avatarURL} name={user.name} />
            </Col>
            <Col>
              <Button onClick={onLogoutUser}>Logout</Button>
            </Col>
          </React.Fragment>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  const key = Object.keys(state.users).find(
    key => state.users[key].id === state.authedUserId
  );
  return {
    isAuthenticated: state.authedUserId !== "" ? true : false,
    user: state.users[key]
  };
};

const mapDispatchToProps = dispatch => ({
  onLogoutUser: (e) => {
    e.preventDefault();
    console.log("Logout clicked");
    dispatch(logoutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
