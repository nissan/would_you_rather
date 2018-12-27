import React from "react";

export const Avatar = props => {
  const { picture, name } = props;
  return (
    <img
      src={picture}
      alt={name}
      style={{ borderRadius: 50, height: "50px" }}
    />
  );
};

export default Avatar;
