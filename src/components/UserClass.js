import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, //we create state variables in class components using this.state !
      //if we want more variables we will just have to add more here
      //ex
      //count2:0,
    };
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user">
        <h2>Name: {name} </h2>
        <h3>Location : {location} </h3>
        {/* <div>
        <UserContext.Consumer> {
          ({loggedInUser}) => <h1>{loggedInUser|| "Guest"}</h1>
          }</UserContext.Consumer>
        </div> */}
      </div>
    );
  }
}

export default UserClass;
