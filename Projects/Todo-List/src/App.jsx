import Additems from "./Components/Additems";
import Listitem from "./Components/Listitem";
import Container from "./Components/Container";
import "./App.css"

function App() {
  return (
    <center className="Todo-content">
      <h1>To-Do App</h1>
      <Container />
      <Additems />
      <Listitem />
    </center>
  );
}

export default App;
