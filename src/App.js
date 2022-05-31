import './App.css';
import Menu from './Menu';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Assinatura from './Assinatura';
import CursosOferecidos from './CursosOferecidos';
import Cadastro from './Cadastro';
import Login from './Login';

function App() {
    return (
        <div className="App">
            <Menu/>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='Assinatura' element={<Assinatura/>} />
                <Route path='CursosOferecidos' element={<CursosOferecidos/>} />
                <Route path='Cadastro' element={<Cadastro/>} />
                <Route path='Login' element={<Login/>} /> 
            </Routes>
        </div>
  );
}

export default App;
