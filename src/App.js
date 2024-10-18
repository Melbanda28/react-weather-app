import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
       
      </div>
    </div>
  );
}

export default App;
