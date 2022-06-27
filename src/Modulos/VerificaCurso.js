import React from "react";
import Cursos from "../Paginas/Cursos";
import SemAcesso from "../Paginas/SemAcesso";


const VerificaCurso = () => {

    const id = localStorage.getItem("id")

    return ( 
        <div>
            {id != null ? <Cursos/> : <SemAcesso/>}
        </div>
     );
}
 
export default VerificaCurso;