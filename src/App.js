import './App.scss';
import Header from "./components/Header";
import ItalianCuisine from "./Pages/Hero";
import Visit from "./Pages/Visit";

function App() {
  return (
    <div className="App">
    <Header/>
    <ItalianCuisine/>
     <Visit/>
    </div>
  );
}

export default App;
