import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users = [] }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.length ? users.map((user, index) => (
        <li key={index}>{user}</li>
      )) : <li>nobody's here</li>}
    </ul>
  </aside>
);

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string)
};

export default Users;