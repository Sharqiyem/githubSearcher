import React from 'react';
import UserPlaceholder from './UserPlaceholder';

const UsersPlaceholder = () => {
  return (
    <>
      {[...Array(4).keys()].map((_, i) => {
        return <UserPlaceholder short key={i.toString()} />;
      })}
    </>
  );
};

export default UsersPlaceholder;
