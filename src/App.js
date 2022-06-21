import { Routes, Route, Link } from "react-router-dom";
import Home from './Paginas/Home';
import Assinatura from './Paginas/Assinatura';
import Cursos from './Paginas/Cursos';
import Comunidade from './Paginas/Comunidade';
import Faq from './Paginas/Faq';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login2 from './Paginas/Login2';
import CursoM from "./Modulos/CursoM";
import AulaM from "./Modulos/AulaM";
import Historia from "./Paginas/Historia"

function App() {
    require('./App.css')
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='Assinatura' element={<Assinatura/>} />
                <Route path='Cursos' element={<Cursos/>} />
                <Route path='Comunidade' element={<Comunidade />} />
                <Route path='Faq' element={<Faq />} />
                <Route path='Cadastro' element={<Login2 cadastro={true}/>} />
                <Route path='Login2' element={<Login2/>} /> 
                <Route path='CursoM' element={<CursoM/>} />
                <Route path='AulaM' element={<AulaM/>} />
                <Route path='Historia' element={<Historia/>} />
            </Routes>
        </div>
  );
}

export default App;
