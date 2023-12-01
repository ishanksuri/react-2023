import React from "react";

class UserClass extends React.Component {
  //class based component requires construtor to receive the props &
  //we definitely requires to write super(props) because
  //the super() keyword in react is used to call the constructor of the parent class.
  // This is important because it allows the child class to inherit the properities
  // and methods of parent class.
  // In addition, the super() keyword can be used to pass props to the parent class
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name} </h2>
        <h3>Location: SRE</h3>
        <h4>Contact: @ishank</h4>
      </div>
    );
  }
}

export default UserClass;
