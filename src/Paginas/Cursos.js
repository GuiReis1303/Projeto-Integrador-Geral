import React from "react";
import Curso_DesignC from "../Modulos/Carousel-Cursos/Curso_DesignC";
import Curso_FinancasC from "../Modulos/Carousel-Cursos/Curso_FinancasC";
import Curso_ProgC from "../Modulos/Carousel-Cursos/Curso_ProgC";
import MenuAL from "../Modulos/MenuAL";
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";

const Cursos = () => {
    require('./Cursos.css')
    return ( 
        <div className="geral-curso">
            <MenuAL/>
            <Whats/>

            <Curso_ProgC/>
            <Curso_FinancasC/>
            <Curso_DesignC/>

            {/*<div className="bodyCursos">
                <div className="containerCursos">  
                    <h2>Cursos mais Assistidos</h2> 
                    <div className="AlinharCursosDescricao">
                        <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                            <div class="containerMaisAssistidos">
                                <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                <p>Paulo Neto</p> 
                                <h2>Plano Gold</h2> <br/>
                            </div>
                        </div>

                        <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qfzujyG.png" alt="Avatar" />
                            <div class="containerMaisAssistidos">
                                <h5><b>Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!</b></h5> 
                                <p>Paulo Neto</p> 
                                <h2>Plano Gold</h2> <br/>
                            </div>
                        </div>
                                            
                        <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                            <div class="containerMaisAssistidos">
                                <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                <p>Paulo Neto</p> 
                                <h2>Plano Gold</h2> <br/>
                            </div>
                        </div><br/><br/> <br/><br/>
                    </div>   

                    <div className="AlinharCursosDescricao">
                        <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                            <div class="containerMaisAssistidos">
                                <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                <p>Paulo Neto</p> 
                                <h2>Plano Gold</h2> <br/>
                            </div>
                        </div>

                        <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                            <div class="containerMaisAssistidos">
                                <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                <p>Paulo Neto</p> 
                                <h2>Plano Gold</h2> <br/>
                            </div>
                        </div>

                        <div class="cardMaisAssistidos">
                            <img className="imagemCursosMaisAssistidos" src="https://i.imgur.com/qJrMdbS.png" alt="Avatar" />
                            <div class="containerMaisAssistidos">
                                <h5><b>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</b></h5> 
                                <p>Paulo Neto</p> 
                                <h2>Plano Gold</h2> <br/>
                            </div>
                        </div>   
                    </div>  
                </div>
            </div>*/}

            <Rodape/>            
        </div>

        
     );
}
 
export default Cursos;