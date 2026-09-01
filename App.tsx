import Editor from "./components/Editor";
import Output from "./components/Output";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <div className="main">
        <Editor />
        <Output />
      </div>
    </div>
  );
}

export default App;
