import React from "react";
import Curso_DesignC from "../Modulos/Carousel-Cursos/Curso_DesignC";
import Curso_FinancasC from "../Modulos/Carousel-Cursos/Curso_FinancasC";
import Curso_ProgC from "../Modulos/Carousel-Cursos/Curso_ProgC";
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";
import VerificaMenu from "../Modulos/VerificaMenu";

const Cursos = () => {
    return ( 
        <div className="geral-curso">
            <VerificaMenu/>
            <Whats/>

            <Curso_ProgC/>
            <Curso_FinancasC/>
            <Curso_DesignC/>

            <Rodape/>           
        </div>

        
     );
}
 
export default Cursos;