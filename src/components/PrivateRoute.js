import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { routes } from "../utils";

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: routes.login, state: { from: props.location } }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authedUserId === "" ? false : true
  };
};

export default connect(mapStateToProps)(PrivateRoute);
