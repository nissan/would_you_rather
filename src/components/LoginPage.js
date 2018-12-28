import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Form,
  Input
} from "reactstrap";
import { loginUser } from "../actions/authedUser";
import { routes } from "../utils";
class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false
  };
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { onSubmitForm } = this.props;
    e.preventDefault();
    onSubmitForm(e.target.selectedUser.value);
    this.setState({ redirectToReferrer: true });
  }
  render() {
    const { users, location } = this.props;
    const { from } = location.state || { from: { pathname: routes.root } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <Form onSubmit={this.submit}>
        <Card>
          <CardTitle>Welcome to the Would You Rather App</CardTitle>
          <CardSubtitle>Please sign in to continue </CardSubtitle>
          <CardBody>
            <span>Sign In</span>
            <Input
              type="select"
              placeholder="Select Username"
              ref="selectedUser"
              id="selectedUser"
            >
              {users.map(user => (
                <React.Fragment key={user.id}>
                  <option value={user.id}>{user.name}</option>
                </React.Fragment>
              ))}
            </Input>
          </CardBody>
          <CardFooter>
            <Button type="submit">Sign In</Button>
          </CardFooter>
        </Card>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: userId => {
    dispatch(loginUser(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
