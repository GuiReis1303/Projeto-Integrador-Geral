import { faHeart, faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MenuAL from "../MenuAL";
import Rodape from "../Rodape";

const Curso_Financas = () => {

    const colocarIDAula = () => {
        localStorage.setItem("idaula", 2)
    }

    require('./CursoM.css')
    return ( 
        <div>
            <MenuAL/>
        
            <div className="cursoGeral">
                <div className="cursoGeral-Left">
                    
                        <div className="cursoGeral-nomeCurso">
                            <h2>Finanças Completo</h2>
                        </div>
                        <div className="cursoGeral-imagemCurso">
                            <img src={require("./aulaHTML.png")}/>
                        </div>
                        <div className="cursoGeral-boxCurso">
                            <p>
                                No curso de Photoshop da StationClass você poderá criar efeitos e recursos 
                                visuais incríveis, obtendo resultados impressionantes no trabalho com design 
                                gráfico e para web, tratamento de fotos e vídeos.
                            </p>
                        </div>
                </div>

                <div className="cursoRight">
                    <div className="cursoRight-linkAulasCursos">
                    <p onClick={() => colocarIDAula()}><Link to={'/AulaM'} className="cursoRight-linkAulasCursos-linkAulas"><FontAwesomeIcon icon={faThumbtack}/> HTML Introdução</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    </div>
                </div>
            </div>
            <div className="cursoRight-mobile">
                    <div className="cursoRight-mobile-linkAulasCursos">
                    <p><Link to={'/AulaM'} className="cursoRight-mobile-linkAulasCursos-linkAulas"><FontAwesomeIcon icon={faThumbtack}/> Finanças Introdução</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    <p><Link to={''} className="linkAulasD"><FontAwesomeIcon icon={faThumbtack}/> Em Breve</Link></p>
                    </div>
                </div>
            <Rodape/>
        </div>
     );
}
 
export default Curso_Financas;