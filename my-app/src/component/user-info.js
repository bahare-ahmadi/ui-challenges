import React from "react";
class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>user info</h2>
        <p>name: {this.props.data.name}</p>
        <p>family: {this.props.data.family}</p>
        <p>age: {this.props.data.age}</p>
        <p>
          <button>Edit</button>
        </p>
      </div>
    );
  }
}
export default UserInfo;
