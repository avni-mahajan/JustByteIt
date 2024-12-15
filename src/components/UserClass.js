import React from "react";

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
    const { count } = this.state.count;

    // Log props and state for debugging
    // console.log("Props:", { name, location });
    // console.log("State:", { count });

    return (
      <div className="user">
        <h2>Name: {name} </h2>
        <h3>Location : {location} </h3>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, //we update state variables using this.setState()  -> its given by react to us
            });
          }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}

export default UserClass;
