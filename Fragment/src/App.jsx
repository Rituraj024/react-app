import Fooditem from "./Components/Fooditem";
import Errormsg from "./Components/Errormsg";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  //let Fooditem= [];
  
  return (
    <>
      <h1>Healthy Foods</h1> 
        <Errormsg/>
       <Fooditem/>
    </>
  );
}

export default App
