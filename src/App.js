import './App.css';
import Menu from './Menu';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Assinatura from './Assinatura';
import CursosOferecidos from './CursosOferecidos';

function App() {
    return (
        <div className="App">
            <Menu/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Assinatura" element={<Assinatura/>} />
                <Route path="CursosOferecidos" element={<CursosOferecidos/>} />
            </Routes>
        </div>
  );
}

export default App;
