import { faHeart, faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MenuAL from "../MenuAL";
import Rodape from "../Rodape";

const Curso_HTML = () => {
    require('./CursoM.css')
    return ( 
        <div>
            <MenuAL/>
        
            <div className="cursoGeral">
                <div className="cursoLeft">
                    
                        <div className="nomeCurso">
                            <h2>HTML Completo</h2>
                        </div>
                        <div className="imagemCurso">
                            <img src={require("./aulaHTML.png")}/>
                        </div>
                        <div className="boxCurso">
                            <p>
                                Curso de HTML Básico da StationClass. O HTML é uma linguagem de marcação 
                                utilizada para a criação de páginas na web. Sua principal finalidade é 
                                estruturar o conteúdo  disponibilizado em uma página. O Objetivo deste curso
                                é guiar você pelos principais elementos do HTML na prática.
                            </p>
                        </div>
                    

                    <div className="caixaAvaliacaoCurso">
                        <div className="avaliacaoCursoPositiva">
                            <p><FontAwesomeIcon icon={faHeart}/>200</p>
                        </div>
                    </div>
                </div>

                <div className="cursoRight">
                    <div className="linkAulasCursos">
                    <p><Link to={'/AulaM'} className="linkAulas"><FontAwesomeIcon icon={faThumbtack}/> HTML Introdução</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
     );
}
 
export default Curso_HTML;