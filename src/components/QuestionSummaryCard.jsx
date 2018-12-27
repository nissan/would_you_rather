import React from "react";
import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap";
import {Link} from 'react-router-dom';
import Avatar from './Avatar';
import {routes} from '../utils';
export const QuestionSummaryCard = props => {
  const {avatarUrl, name, questionId,  optionsSummaryText} = props;
  return (
    <React.Fragment>
      <Card>
        <CardTitle>
          <Avatar
            picture={avatarUrl}
            name={name}
          />{" "}
          {name} asks: Would you rather
        </CardTitle>
        <CardBody>    
          <div>{optionsSummaryText}</div>
        </CardBody>
        <CardFooter>
          {" "}
          <Button color="info"><Link to={`${routes.questions}${questionId}`} style={{color:"white"}}>View Poll</Link></Button>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default QuestionSummaryCard;