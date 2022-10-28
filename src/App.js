import './App.css';
import {BrowserRouter} from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <BrowserRouter>
      <Todo></Todo>
    </BrowserRouter>
  );
}

export default App;
