import logo from "./logo.svg";
import "./App.css";
import { HelloWorld } from "./Components/Helloworld";
function App() {
  return (
    <div className="App">
      <HelloWorld name="Github" desc="Home of wonderfull things" />
      <HelloWorld name="React" desc="I hope I come to love you" />
      <HelloWorld name="Inifinte node_modules" desc="nuff' said" />
    </div>
  );
}

export default App;
