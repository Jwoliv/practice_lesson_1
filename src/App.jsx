import "./App.css";
import GameField from "./component/GameField.jsx";
import JsxPracticeComponent from "./jsx_practice/JsxPracticeComponent.jsx";
import ChildrenComponent from "./jsx_practice/ChildrenComponent.jsx";
import PracticeUseState from "./jsx_practice/PracticeUseState.jsx";

function App() {
  return (
    <>
      <GameField />
      <JsxPracticeComponent type={"Input"} typeElement={"type_element"} />
      <JsxPracticeComponent typeElement={"several_elements"} />
      <ChildrenComponent>
        <h1>h1 element</h1>
      </ChildrenComponent>
      <ChildrenComponent>
        <h2>h2 element</h2>
      </ChildrenComponent>
      <PracticeUseState />
    </>
  );
}

export default App;
