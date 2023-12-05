import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//class based About.js component
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor( 1st call )");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount( 6th call, last call )");
  }

  render() {
    console.log("Parent Render( 2nd call )");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Component</h2>
        {/* <User name={"Akshay Saini (function)"} /> */}

        <UserClass
          name={"Ishank Suri (classes)"}
          location={"Saharanpur (class)"}
        />
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
