# React 18 Fundamentals Crash Course 2022
Following along [Codevolution's](https://www.youtube.com/watch?v=jLS0TkAHvRg) React 18 Fundamentals crash course. This is an index for myself to look up basics quickly, perhaps it helps someone else.
I try to include codeblocks to prevent the search for examples.

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
- The Click event
    - When adding a function to an Event, we do not add parentheses, or it will run when the component renders

```javascript
      <button onClick={handleClick}>Click</button>
```
    - Or we wrap it in an arrow function, where we can also pass in the event

```javascript
 <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Click
      </button>
```

### Parent - Child communication
- This example uses two classes
    - A Parent component, with a simple function console logging 'Hello'
    - A Child component which is a button

    - The Goal: Make the parent's function run by the Child's button being clicked.

- This will be achieved trough Props (properties). To pass the function to the child component. Remember to not add parentheses so the function does not run!
```javascript
import { Child } from "./Child";
export const Parent = () => {
  const sayHello = () => {
    console.warn("Parent says hello back!");
  };

  return <Child helloParent={sayHello} />;
};

```
```javascript
export const Child = (props) => {
  return (
    <button onClick={props.helloParent}>
      Child Button would like to say hi to it's parent!
    </button>
  );
};

```
Success!!! The parent's function fires when the child's button is clicked.

Time for an upgrade, let's also tell our parent something.
- Now we need to wrap the logic to run onClick in an arrow function so that we can add the parentheses without it firing everytime it renders
```javascript
import { Child } from "./Child";
export const Parent = () => {
  const sayHello = (message) => {
    console.warn(`Child says: ${message}`);
    console.warn("Parent is not responding....");
  };
  return <Child helloParent={sayHello} />;
};
```
```javascript
export const Child = (props) => {
  return (
    <button
      onClick={() => {
        props.helloParent("Hello there parent!");
      }}
    >
      Child Button would like to say hi to it's parent!
    </button>
  );
};
```

### Conditional Rendering
In react a lot of times we have to show/hide a component dependend on a condition. This course talks about two common ways to handle this.
- Ternary
    - Using curly brackets and a Ternary conditional.
    - Inline If-Else with Conditional Operator 
    - Inline If with Logical && Operator 
```javascript
import { useState } from "react";
export const Authenticated = () => {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setAuth(!isAuth);
        }}
      >
        Auth
      </button>
      <h1>{isAuth ? "Welcome Mr. Auth" : "What did you do to Mr. Auth ?"}</h1>

      {isAuth ? <p>How are you today?</p> : null}

      {isAuth && (
        <p>
          It works because in JavaScript, true && expression always evaluates to
          expression, and false && expression always evaluates to false.
          Therefore, if the condition is true, the element right after && will
          appear in the output. If it is false, React will ignore and skip it.
        </p>
      )}
    </>
  );
};
```

#### Preventing Component from Rendering
- Extra:
In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.

### Creating Lists
Lists are very common, here we repeat html for every element in a list.
- In React this is usually done using JavaScript's [].map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map?retiredLocale=nl) function
- ```he Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. - MdnDocs```

    - .Map() function
        - Takes in a funciton as an argumnet
            - The function takes an argument
    - !!![Warning: Each child in a list should have a unique "key" prop.](https://reactjs.org/link/warning-keys)!!!
        - The key is internaly used in the DOM to construct the UI in a proper way
        - It prevents bugs and unintended use when sorting or reordering Arrays
        - it's common to make this an ID
```javascript
export const List = () => {
  const listItems = ["first-list-item", "second-list-item", "third-list-item"];
  return (
    <>
      {listItems.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </>
  );
};
```

### Styling Components
There are different ways to style Components
- CSS Stylesheets
    - Import a stylesheet and apply classes to the elements
```css
.styled{
    color:pink
}
```

```javascript
import "../Styled.css";
export const Styled = () => {
  return <h1 className="styled">Hello Styled</h1>;
};
```
- Inline Styling
    - Creating an object and passing it inline
        - Note: You have to camelCase.
```javascript
export const InlineStyled = () => {
  const style = {
    color: "pink",
    fontSize: "2rem",
  };
  return <h1 style={style}>Styled Inline</h1>;
};
```
- CSS Modules
    - Work with CSS module stylesheets
        - ExampleFile:```modulestyle.module.css```
        - The modules are imported a bit differently
        ```javascript
        import styles from "../modulestyle.module.css";
        ```
    - The styles are applied by grabbing them from the style module
```javascript
export const ModuleStyled = () => {
  return <h1 className={styles.moduleStyle}>Module Styled</h1>;
};
```
    - A big advantage about these modules is that they are locally scoped.
        - They do not bleed to children, places where it is not imported.

- CSS in JS Libraries
    - This is a bit more advanded and wil not be covered

### Forms with ReactJS
Managing forms with react is done with useState.
- Save the value in the state variable
- Chain the state setter to the onChange event
    - Let's practice and add some kind of feedback to the input field.
- It is common to prevent the form's standard submit prehaviour with a cusom function
    - Let's also add some fun in here, haven't given credit to bulba yet. and we are on line 442....
```javascript
import { useState } from "react";

export const Form = () => {
  const [pokemon, setPokemon] = useState("Bulbasaur");
  const [goodTrainer, setGoodTrainer] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (pokemon) {
      case "Bulbasaur":
      case "bulbasaur":
      case "bulba":
        setGoodTrainer(true);
        break;
      default:
        setGoodTrainer(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pokemon">The best pokemon is:</label>
      <input
        name="pokemonName"
        type="text"
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
      ></input>
      <button type="submit">I have chosen.</button>
      {goodTrainer && <h1>Yes, there is only 1 number one!</h1>}
    </form>
  );
};
```
### HTTP GET && POST
How to make a get, post request. To practice API requests, there are [websites](https://jsonplaceholder.typicode.com/) that have fake json data for us to practice on.
To fetch data in React you need:
    - useState,useEffect hooks
    - API URL

#### GET
- First we create a state with an empty array initially to hold our pokemon.
- We need two hooks
  - useState
    - To display the data
  - useEffect
    - To Fetch the data
    - This is a hook that allows us to add sideeffects to our components. in this case fetching an api.
      - the useEffect takes 2 arguments.
        - A callback function.
          - What should the effect do ? 
        - A dependency array 
          - Determines when the effect should be retriggered
          - If empty it will trigger when the component is rendered.
In this example I only iknow the quesiton will be unique, so that is used as the key. In the second .map to show the wrong answers. we are using the built in crypto object to generate a random unique ID
```javascript
import { useState } from "react";
import { useEffect } from "react";
export const TriviaList = () => {
  const [questions, setQuestion] = useState([]);
  useEffect(() => {
    const results = [];
    async function getQuestions() {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const formatted = await response.json();
      for (const question of formatted.results) {
        results.push(question);
      }
      setQuestion([...results]);
    }
    getQuestions();
  }, []);
  return (
    <>
      <ul>
        {questions.map((question) => {
          return (
            <li key={question.question}>
              <ul>
                <h4>Question</h4>
                <p>{question.question}</p>
                <p>Answers:</p>
                <ul>
                  <p>Correct:</p>
                  <li>{question.correct_answer}</li>
                  <p>Other options:</p>
                  {question.incorrect_answers.map((a) => {
                    return <li key={crypto.randomUUID()}>{a}</li>;
                  })}
                </ul>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
```

#### Posting
Here were using [JSONPlaceHolder](https://jsonplaceholder.typicode.com/) to try post something from a form to an api.

the body this api accepts is determined by the served:
```javascript
{
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
}
  ```
- So we can add a simple form to set this data.
  - For the ID, I will generate an ID with code and not allow the user to specify this
  - We create a state for every piece of data we want to keep.
    - And set these as values in the designated input fields
    - We also call the 'onChange' event to update our state values when the input is changed.
  - We add a submit button to the form
    - we listen to the onSubmit event and handle it in a function
      - This function prevents the default behaviour of the form
      - This function posts to the API
        - The request's header,body, url is provided by the json placeholder api.
  - The AI returns us a response showing us what got posted to the api.
```javascript
import { useState } from "react";
export const PostForm = () => {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: crypto.randomUUID(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.table(json));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="body">Body: </label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button type="submit">Post!</button>
    </form>
  );
};
```
- Summary:
  - Create a form
  - Tie values to the state object
  - Make the post request in the submit handler.

### UseTransition() Hook
A new Hook from react 18, this is not a core functionality. But a hook introduced to increase performance.
- To provide a lot of data I added a pokemon.json file in the root of the project.
  - This contains 1154 pokemons
      - each has a name and url to detials.
  - I use the pokemon's index in the array as a unique key.

- Now let's make the pokemon's searchable.
  - We add a state value to store the query
  - We add an input field to update the query
  - We create a filtered array that uses the query to filter our total list.
    - Since the query is a state, the view will rerender whenever the query changes.
- The result looks like this, we can now search for a pokemon to go straigh to it's API link
```javascript
import POKEMON from "../pokemon.json";
import { useState } from "react";
export const Pokemon = () => {
  const [query, setQuery] = useState("");
  const queryInputHandler = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  const queriedPokemon = POKEMON.results.filter((pokemon) => {
    return pokemon.name.includes(query.toLowerCase());
  });
  return (
    <>
      <div>
        <label htmlFor="query">Search for a Pokemon:</label>
        <input type="text" name="query" onChange={queryInputHandler} />
      </div>
      <div>
        <h1>Search results:</h1>
        {queriedPokemon.map((pokemon, index) => {
          return (
            <div>
              <a key={index} href={pokemon.url}>
                {pokemon.name}
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <h1>The Whole list:</h1>
        {POKEMON.results.map((pokemon, index) => {
          return (
            <div key={index}>
              <p>{pokemon.name}</p>
              <a href={pokemon.url}>
                Got to the dedicated JSON file from the Pokemon api
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
```
#### The above approach might result in performance issues.