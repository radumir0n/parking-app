import "./App.scss";
import Cars from "./components/Cars/Cars";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Parking App</h1>
      <Cars />
    </div>
  );
};

export default App;
