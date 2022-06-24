import { Routes, Route, Link } from "react-router-dom";
import Home from './Paginas/Home';
import Assinatura from './Paginas/Assinatura';
import Cursos from './Paginas/Cursos';
import Comunidade from './Paginas/Comunidade';
import Faq from './Paginas/Faq';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login2 from './Paginas/Login2';
import Curso_HTML from "./Modulos/Cursos/Curso_HTML";
import AulaM from "./Modulos/AulaM";
import Historia from "./Paginas/Historia"
import Curso_Financas from "./Modulos/Cursos/Curso_Financas";
import Curso_Photoshop from "./Modulos/Cursos/Curso_Photoshop";
import MenuALogin from "./Modulos/MenuALogin"

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
                <Route path='Curso_HTML' element={<Curso_HTML/>} />
                <Route path='Curso_Financas' element={<Curso_Financas/>} />
                <Route path='Curso_Photoshop' element={<Curso_Photoshop/>} />
                <Route path='AulaM' element={<AulaM/>} />
                <Route path='Historia' element={<Historia/>} />
                <Route path="MenuALogin" element={<MenuALogin/>} />
            </Routes>
        </div>
  );
}

export default App;
