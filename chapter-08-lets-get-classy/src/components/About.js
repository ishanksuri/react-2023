import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is About Component</h2>
      <User name={"Akshay Saini (function)"} />

      <UserClass name={"Ishank Suri (classes)"} />
    </div>
  );
};

export default About;
