import Header from "./components/Header";
import "./style.css";

import TodoList from "./views/TodoList";
function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
