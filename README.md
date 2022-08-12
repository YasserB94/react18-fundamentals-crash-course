# React 18 Fundamentals Crash Course 2022
Following along [Codevolution's](https://www.youtube.com/watch?v=jLS0TkAHvRg) React 18 Fundamentals crash course

***
## Theory
### What is React ? 
- An OpenSource JavaScript Library
    - To build User Interfaces
    - Supported by a big rich and ecosystem
    - That works well with other libraries

### Why Learn react ? 
- Popular and mainstream on the job market
- Community backed, so there is a lot of documentation
- Component based architecture
    - Can be composed into complex and large web applications
    - Can be reused, recycled.
- It's a declaritive library.
    - You tell the library what you want and it will create the UI for you
- It's a great addition to your skillset in 2022

### Prerequirements
- Have a decent understanding of
    - HTML
    - CSS
    - JavaScript ES6
- Have a development environment with
    - NodeJS
    - An IDE
    - A code formatter

### Creating my first app
- Create an App with the _create-react-app <app-name>_ interface.

- App.js
    - Change values here, to see the browser automaticly refresh and display the changes.

- Folder structure
    - Root
        - _package.json_
            - Contains depencencies,scripts,settings for npm to create react applications
            - Contains the configuration for ES_Lint to find possible errors in the code
            - Contains the browser support list
        - .gitignore
            - Version control helper
        - Node_modules
            - Contains npm dependency packages.
        - _public_
            - Most files here are concerned with progressive webapps, which is out of this crash course's scope.
            - We only watch the _index.html_ file
                - This is the served file
                - Typicaly outside of the `<head>` section this file is not changed.
        - _src_
            - This is where we work during development
            - _index.js_
                - This is the starting point of the Application
                - Here we specify the root component. 
                    - This is usually the provided ```<div>``` in the _/public/index.html_ file with id:_root_
                    - Here we added the ```<App />``` component so it's rendered in the DOM
            - _setupTests.js_,_reportWebVitals.js_,_App.test.js_
                - A Simple starting testcase and performance testing, these files are not for beginners.

### What is a component in ReactJS ? 
- A part of the User Interface
- Example of a component tree:
    - Root Component
        - Header Component
            - SideNav Component Left
            - Main Content Component
            - SideNav Component right
        - Footer component
- Here the sidenav component was used twice, for different sides of the page, but it is the same component.

- Component in Code
    - Resides in a Javascript file.
    - Kinds of components in code:
        - Class components
        - Functional components
            - More modern and a suggested start in 2022
            - Is a JavaScript function
                - Takes in properties (props)
                - Returns JSX

Real world Applications can have thousands of components.

- Hands on, create a funcitonal component.
    - Remove the body of the App() component, and Add your own component greeting the world!
    - Without a knowledge of Arrow functions, this is the time to go study those first.
    - Have some knowledge on how to import/export in javascript
```javascript
    export const HelloWorld = () => {
      return <h1>Hello World!</h1>;
    };
```

### JSX - JavaScript XML
Jsx is the special HTML used in React.
- A Syntax extension to JavaScript
- Describes what the UI should look like
- Comes with the full power of JavaScript
    - ```{ 144/12 }``` within JSX would resolve to 12 in the UI
    - JSX VS HTML
        |HTML|JSX|
        |---|---|
        |class|className|
        |for|htmlFor|
        |onclick|onClick|
        |tabindex|tabIndex|
- React Elements
    - JSX produces React Elements
        - These are converted into Objects
        - These Objects are used to render the DOM
- You get used to it by using it!

### Props - Properties
Props are the optional Input Components can accept.
- Props are used to pass in data into components
    - This allows copies of the same component to show different data
    - This makes components Dynamic
- Hands on, Update the ```HelloWorld``` component to greet different things.
    - First, passing in data from the parent
```js
    function App() {
  return (
    <div className="App">
      <HelloWorld name="Github" />
      <HelloWorld name="React" />
      <HelloWorld name="Inifinte node_modules" />
    </div>
  );
}
```
    - Second, accept the data in the child component.
        - the input can be called anything. but it is conventional and recommended to stick with props
        - NOTE: these have to be of a declared custom Type in TypeScript
```js
export const HelloWorld = (props) => {
  return <h1>Hello World and {props.name}!</h1>;
};
```