import React from 'react';
import { connect } from 'react-redux';

const UserList = props => (
  <div>
    <h1>User List</h1>
    <ul>
      { props.users.map(user => <li key={user.userId}>{user.username}</li>) }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(UserList);
