import { useEffect, useState } from "react";

//using props
// const User = (props) => {
//   return (
//     <div className="user-card">
//       <h2>Name: {props.name}</h2>
//       <h3>Location: Dehradun</h3>
//       <h4>Contact: @akshaymarch7</h4>
//     </div>
//   );
// };
// export default User;

//function based component
//using props but destructuring also
const User = ({ name }) => {
  //state variable inside the functional component
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //Api calls
    // async function getUserInfo(){
    //   const data = await fetch
    // }

    setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
