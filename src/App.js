import './App.css';
import Menu from './Modulos/Menu';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Paginas/Home';
import Assinatura from './Paginas/Assinatura';
import CursosOferecidos from './Paginas/CursosOferecidos';
import Comunidade from './Paginas/Comunidade';
import Faq from './Paginas/Faq';
import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login';

function App() {
    return (
        <div className="App">


            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='Assinatura' element={<Assinatura/>} />
                <Route path='Cursos' element={<CursosOferecidos/>} />
                <Route path='Comunidade' element={<Comunidade />} />
                <Route path='Faq' element={<Faq />} />
                <Route path='Cadastro' element={<Cadastro/>} />
                <Route path='Login' element={<Login/>} /> 
            </Routes>
        </div>
  );
}

export default App;
