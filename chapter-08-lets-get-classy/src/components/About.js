import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//class based About.js component
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // console.log("Parent Constructor( 1st call )");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount()");
    this.setState({
      count: this.setState + 1,
    });
    console.log(
      "--PARENT--setState() inside DidMount initialised UPDATING in Parent"
    );
  }

  componentDidUpdate() {
    // console.log("Parent componentDidUpdate()");
  }

  componentWillUnmount() {
    // console.log(" Parent  componentWillUnmount()");
  }

  render() {
    console.log("Parent Render()");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Component</h2>
        {/* <User name={"Akshay Saini (function)"} /> */}

        <UserClass name={"First "} location={"Saharanpur (class)"} />
        {/* <UserClass name={"Second "} location={"Doon (class)"} /> */}
      </div>
    );
  }
}

//Functional About.js component
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About Component</h2>
//       {/* <User name={"Akshay Saini (function)"} /> */}

//       <UserClass
//         name={"Ishank Suri (classes)"}
//         location={"Saharanpur (class)"}
//       />
//     </div>
//   );
// };

export default About;
