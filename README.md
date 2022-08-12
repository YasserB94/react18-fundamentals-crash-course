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
    - Different props can be passed in and shown in the component
```js
function App() {
  return (
    <div className="App">
      <HelloWorld name="Github" desc="Home of wonderfull things" />
      <HelloWorld name="React" desc="I hope I come to love you" />
      <HelloWorld name="Inifinte node_modules" desc="nuff' said" />
    </div>
  );
}
```
    - It's important Components only return one element each, with as many children as wanted
```javascript
export const HelloWorld = (props) => {
  return (
    <>
      <h1>Hello World and {props.name}!</h1>
      <p>{props.desc}</p>
    </>
  );
};
```
- Sometimes it is not known yet what content will be passed in.
    - But the component should still render this content.
    - Herefor there is a reserved children property in the props object.
        - The child is declared between the two JSX tags of the parent
```js
function App() {
  return (
    <div className="App">
      <HelloWorld name="Github" desc="Home of wonderfull things">
        <button>Hello I am dynamic HTML content. rendered by my parent</button>
      </HelloWorld>
      <HelloWorld name="React" desc="I hope I come to love you" />
      <HelloWorld name="Inifinte node_modules" desc="nuff' said">
        <p>I am a child prop paragraph</p>
      </HelloWorld>
      {}
    </div>
  );
}
  ```
  ```js
  export const HelloWorld = (props) => {
  return (
    <>
      <h1>Hello World and {props.name}!</h1>
      <p>{props.desc}</p>
      {/* if I receive nothing I render nothing :D  */}
      {props.children}
    </>
  );
};
```
- **!IMPORTANT Component's props may NEVER be changed.**
```js
CONST PROPS_MUST_BE_IMMUTABLE
```

### Render mutable data with states!
- States vs Props

|Props|State|
|---|---|
|Passed to the component|Managed within the component|
|Function parameter|Variables declared in the function's body|
|IMMUTABLE!|can be changed :)|
|referenced as:props|refered to as: useState() Hook|

#### Getting to know states.
- Create a new component that incriments when clicked.
    - The variable count is initialised by useState() to 0
    - setCount is called when the button is clicked to increment the count by one.
```js
export const IncrementalButton = () => {
  let [count, setCount] = useState(0);
  return (
    <button onClick={
        () => setCount(count++)
    }>The count is:{count}
    </button>
  );
};

```
- a state is a variable that is maintained within a component
    - A state can be changed
        - Whenever this happens, React will update the UI to display the correct value.

### Hooks
A commonly used term that should sound somewhat familiar after this chapter.
- It's a special function that let's you _hook into_ React's features.
- There are several hooks built in React:
    - useState
    - useReducer
    - useEffect
    - useContext
    - useRef
    - useMemo
    - useCallback
    - useTransition
    - useDeferredValue
- In this crashcouse useState, useEffect and useTransition will be taught, tough the other hooks should be learned afterwarts when more familiar with React.

### Events in React.