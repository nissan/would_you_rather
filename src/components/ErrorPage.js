import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
export const ErrorPage = () => {
  return (
    <Card>
      <CardTitle>404 Error</CardTitle>
      <CardBody>
        I'm sorry, but the page you are looking for cannot be found
      </CardBody>
    </Card>
  );
};

export default ErrorPage;
