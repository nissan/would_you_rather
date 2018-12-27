import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

const LeaderboardPage = props => {
  const { users } = props;
  return (
    <React.Fragment>
      {users.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.sort((a, b) => {
      const scoreA = a.questions.length + Object.keys(a.answers).length;
      const scoreB = b.questions.length + Object.keys(b.answers).length;
      return scoreB - scoreA;
    })
  };
};

export default connect(mapStateToProps)(LeaderboardPage);
