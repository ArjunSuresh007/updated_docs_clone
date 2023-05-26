import TextEditor from "./Editor";
import './Css_files/App.css'
import Headers from "./header";
import Sidebar from "./Sidebar";

function App() {

  return (
    <div className="App">
      <div className="header">
    <Headers/>
      </div>
      <div className="editor">
    <TextEditor />
      </div>
      <div className="sidebar">
    <Sidebar/>
      </div>
    </div>
  );
}

export default App;
