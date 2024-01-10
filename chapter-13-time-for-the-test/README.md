#npm commands
npm init
npm install -D parcel
npm install
npm install react
npm i react-dom
npx parcel index.html( dev build )
npx parcel build index.html( prod build )

npm install @reduxjs/toolkit
npm install react-redux

npm i -D @testing-library/react
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev jest-environment-jsdom
npm i -D @babel/preset-react
npm i -D @testing-library/jest-dom

# Parcel job

-Dev Build
-Local Server
-HMR = Hot Module Replacement( when we save file it automatocally refreses the page)
-using Filewatching Algorithm- written in c++
-Caching - faster Builds
-Image optimisaton
-Minification
-Bundling
-Compress
-consistent Hashing
-code splitting
-Differential bundling- supoort older browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking- remove unused code
-Different dev and prod bundles
-more in notebook

# Food Ordering app

/\*\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-        -Img
-        -Name of res, Star Rating, cuisine, delivery title
- Footer
- - Copyright
- - Links
- - Address
- - Contact
- \*/

Two Types of Export/Import

1. Default Export/Import
   export default Component;
   import Component from "path;

2. Named Export/Import
   export const Component;
   import {component} from "path";

# React Hooks

-Normal Js Utility function
-written in-build inside the react
-Two very important React Hooks
-useState() -80% of time you'll be using this
-useEffect() -19% of time you'll be using this

otherHooks
-useRouteError
-useParams
-useContext

- 1% of time you'll be using other react hooks

# 2 types of Routing in web Apps

-Client side routing
-Server Side Routing

# Redux Toolkit

- Install two libraries 1. @reduxjs/toolkit and 2. react-redux
- npm i @reduxjs/toolkit
- Build our store
- Connect our store to our app
- create Slice (cartSlice)
- dispatch( action )
- Selector

# Types of testing( a developer can do in writing test cases)

- Unit testing
- Integration Testing
- End to End Testing- e2e testing

# Setting up testing in our app

- npm i -D @testing-library/react
- npm i -D jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- configure babel: Create babel.config.js and copy paste some code here
- configure Parcel config file to disable default babel transpilation - ie create .parcelrc ( from parceldocs- JS- babel- usage with other tools )
- Jest configuration, Initializing the jest ( npx jest --init)
- Install jsdom library- npm install --save-dev jest-environment-jsdom
- Install- npm i -D @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel
- Install- npm i -D @testing-library/jest-dom
