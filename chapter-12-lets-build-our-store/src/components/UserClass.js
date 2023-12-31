import React from "react";

class UserClass extends React.Component {
  //class based component requires construtor to receive the props &
  // why super is used ?
  //we definitely requires to write super(props) because
  //the super() keyword in react is used to call the constructor of the parent class.
  // This is important because it allows the child class to inherit the properities
  // and methods of parent class.
  // In addition, the super() keyword can be used to pass props to the parent class
  constructor(props) {
    super(props);
    // console.log(props);

    // creating State variable in class based component
    // this.state is a big object which will contain all the state variables (inside the single object )
    this.state = {
      // count: 0,
      // count2: 2,
      //state variable needs to be initialised with initial/dummy data just like functional component
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    //When the class loads for the first time, first constructor is called then render is called.
    console.log(this.props.name + "Child Constructor()");
  }

  //PART1: using github user api
  //componentDidMount is called after this class component is mounted onto the webpage
  // async componentDidMount() {
  //   console.log(this.props.name + "Child ComponentDidMount()");
  //   const data = await fetch("https://api.github.com/users/ishanksuri");
  //   const jsonData = await data.json();

  //   //UPDATING state variable with jsonDATA which came from github live API call
  //   this.setState({
  //     userInfo: jsonData,
  //   });
  //   console.log(
  //     this.props.name +
  //       "-----CHILD---setState() inside DidMount initialised UPDATING CYCLE with updated API data----"
  //   );
  //   console.log(jsonData);
  // }

  //PART2: showing CONS of SPA application
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);
  }

  //---called at the end of UPDATING CYCLE---
  componentDidUpdate() {
    // console.log(this.props.name + "child ComponentDidUpdate");
  }

  //this function is called just before a component is UNMOUNTING---
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "child  componentWillUnmount");
  }

  render() {
    //Destructuring props
    // const { name, location } = this.props;

    //Destructuring state variable
    // const { count, count2 } = this.state;

    //render is called
    // console.log(this.props.name + "Child Render() ");

    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        {/* how to use props in class based component without destructuring */}
        {/* <h2>Name: {this.props.name} </h2> */}

        {/* how to use state variable in class based component without destructuring */}
        {/* <h1>Count = {this.state.count} </h1> */}
        {/* <h1>Count = {this.state.count2} </h1> */}

        {/* <h1>Count = {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count = this.state.count + 1;

            //updating state variables in class based component using useState()
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });

            // OR
            // this.setState({
            //   count2: this.state.count2 + 1,
            // });
          }}
        >
          Count Increase
        </button>
        <h1>Count2 = {count2}</h1> */}
        <img src={avatar_url} />
        <h2>Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ishank</h4>
      </div>
    );
  }
}

export default UserClass;
