import './App.scss';
import Header from "./components/Header";

import Visit from "./Pages/Visit";
import Footer from "./Pages/Footer";
import {Route, Routes} from "react-router-dom";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import MainMenu from "./Pages/mainMenu";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/menu"} element={<MainMenu/>}/>
            </Routes>
            <Hero/>
            <Visit/>
            <Footer/>
        </div>
    );
}

export default App;

