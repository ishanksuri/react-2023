/**
 * <div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
  </div>
</div>
 */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Replaced Akshay is here, Im an h1 tag'),
    React.createElement('h2', {}, 'Iam an h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Im an h1 tag'),
    React.createElement('h2', {}, 'Iam an h2 tag'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello world from React!'
// );

// // It will not print some html element but it will print react element. And react element is nothing but a javascript object
// console.log(heading);

//this responsible to assign already existing element inside the root
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // The job of render function is to take object(heading), create the h1 tag which browser understands and put that up inside the root element
// ReactElemnt(object) => HTML( Browser Understands)
// root.render(heading);
