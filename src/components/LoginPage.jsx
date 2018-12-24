import React from "react";
import { connect } from "react-redux";
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
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { onSubmitForm } = this.props;
    e.preventDefault();
    onSubmitForm(e.target.selectedUser.value);
  }
  render() {
    const { users } = this.props;
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
              {Object.keys(users).map(key => (
                <option key={users[key].id} value={users[key].id}>
                  {users[key].name}
                </option>
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
