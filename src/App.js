import "./App.css";
import { Authenticated } from "./Components/Authenticated";
// import { IncrementalButton } from "./Components/IncrementalButton";
import { Parent } from "./Components/Parent";
import { List } from "./Components/List";
import { Styled } from "./Components/Styled";
import { InlineStyled } from "./Components/InlineStyles";
import { ModuleStyled } from "./Components/ModuleStyled";
function App() {
  return (
    <div className="App">
      <Styled></Styled>
      <InlineStyled></InlineStyled>
      <ModuleStyled></ModuleStyled>
    </div>
  );
}

export default App;
