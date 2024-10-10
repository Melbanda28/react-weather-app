import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
    <div className="container">
      <Weather />

      <footer>
        <p>
          This project was coded by {""}
          <a href="https://github.com/Melbanda28">Mellania Banda</a>
          {""} and is open-sourced on {""}
          <a href="https://github.com/Melbanda28/react-weather-app">Github</a>
        </p>
      </footer>
    </div>
    </div>
  );
}

export default App;
