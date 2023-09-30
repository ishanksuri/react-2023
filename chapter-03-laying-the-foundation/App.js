import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span> React Element 1 </span>;

//part1- react element using core react
//React.createElement => ReactElement- Object => HTMLElement(render)
// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');

//part2- this is how you create reactElement using JSX
// JSX - HTML- like or XML-like syntax
//JSX code is transpiled before it reahes the JS engine
//babel is coverting JSX code to React.createElement
// JSX => Babel transpiles it to React.createElement => ReactElemt- JSobject => HTMLElement(render)
//React Element- is a JSX
const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    React Element 2
  </h1>
);

//normal JS variable
const number = 10000;

//Title component-using normal function
// const Title = function () {
//   return (
//     <h1 className="head" tabIndex="5">
//       Namaste React using JSX
//     </h1>
//   );
// };

//Title component-using arrow function-industry standard
const Title = () => (
  <h1 className="head" tabIndex="5">
    Functional Component 1
  </h1>
);

//React Functional Component- a JS function which returns a React Element( JSX )
//one way
// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };
//2nd way
const HeadingComponent = () => (
  <div id="container">
    {/* if i want to render my title component inside HeadingComponent */}
    {/* <Title /> and <Title></Title> are both same thing  */}
    {/* <Title /> */}
    {/* <Title></Title> */}
    {/* calling functional component as JS function because unctional component is
    JS at EOD */}
    {Title()}

    {/* calling js variable  */}
    {title}

    <h2>{100 + 200}</h2>
    <h1 className="heading">Functional Component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//render React Element
// root.render(heading);

//render React Component
//root.render
root.render(<HeadingComponent />);
