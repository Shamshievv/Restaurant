import './App.scss';
import Header from "./components/Header";
import About from "./Pages/About";
import BestSellers from "./Pages/BestSellers";

function App() {
  return (
    <div className="App">
    <Header/>
      <About/>
      <BestSellers />
    </div>
  );
}

export default App;
