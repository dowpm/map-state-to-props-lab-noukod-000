import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // debugger;
    return (
      <div>
        {this.props.nbUsers}
        <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return {
    users: state.users,
    nbUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
