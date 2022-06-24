import React from "react";
import Curso_DesignC from "../Modulos/Carousel-Cursos/Curso_DesignC";
import Curso_FinancasC from "../Modulos/Carousel-Cursos/Curso_FinancasC";
import Curso_ProgC from "../Modulos/Carousel-Cursos/Curso_ProgC";
import MenuAL from "../Modulos/MenuAL";
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";
import MenuALogin from "../Modulos/MenuALogin"

const Cursos = () => {
    const id = localStorage.getItem("id")
    return ( 
        
        <div className="geral-curso">
            {id == null ? <MenuALogin/> : <MenuAL/>}

            <MenuAL/>
            <Whats/>

            <Curso_ProgC/>
            <Curso_FinancasC/>
            <Curso_DesignC/>

            <Rodape/>            
        </div>

        
     );
}
 
export default Cursos;