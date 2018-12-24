import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
const Topbar = props => {
  const { isAuthenticated } = props;
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <Link to="/home">Home</Link>
          </Col>
          <Col>
            {" "}
            {isAuthenticated && <Link to="/newQuestion">New Question</Link>}
          </Col>
          <Col>
            <Link to="/leaderboard">Leader board</Link>
          </Col>
          <Col>{isAuthenticated && <Link to="/logout">Logout</Link>}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authedUser.userId !== 0 ? true : false
  };
};

export default connect(mapStateToProps)(Topbar);
