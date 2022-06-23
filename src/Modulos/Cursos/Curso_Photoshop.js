import { faHeart, faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MenuAL from "../MenuAL";
import Rodape from "../Rodape";

const Curso_Photoshop = () => {
    require('./CursoM.css')
    return ( 
        <div>
            <MenuAL/>
        
            <div className="cursoGeral">
                <div className="cursoLeft">
                    
                        <div className="nomeCurso">
                            <h2>Photoshop Completo</h2>
                        </div>
                        <div className="imagemCurso">
                            <img src={require("./aulaPhotoshop.png")}/>
                        </div>
                        <div className="boxCurso">
                            <p>
                                No curso de Photoshop da StationClass você poderá criar efeitos e recursos 
                                visuais incríveis, obtendo resultados impressionantes no trabalho com design 
                                gráfico e para web, tratamento de fotos e vídeos.
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
                    <p><Link to={'/AulaM'} className="linkAulas"><FontAwesomeIcon icon={faThumbtack}/> Photoshop Introdução</Link></p>
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
 
export default Curso_Photoshop;