import { faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";

const CursoM = () => {

    const informacoesCurso = [
        {
            nomeCurso: "HTML - Completo",
            descricaoCurso: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
            avaliacaoPositiva: "15",
            avaliacaoNegativa: "10",
            linkAulasCurso: ["HTML Introdução", "HTML Facil", "HTML Dificil", "HTML Completo"]
        }
    ];

    require('./CursoM.css')
    return ( 
        <div>
            <MenuAL/>

            <div className="cursoGeral">
                <div className="cursoLeft">
                    <div className="nomeCurso">
                        <h2>{ informacoesCurso[0].nomeCurso}</h2>
                    </div>
                    <div className="descricaoCurso">
                        <p>{ informacoesCurso[0].descricaoCurso}</p>
                    </div>

                    <div className="caixaAvaliacaoCurso">
                        <div className="avaliacaoCursoPositiva">
                            <p><FontAwesomeIcon icon={faThumbsUp}/>{ informacoesCurso[0].avaliacaoPositiva}</p>
                        </div>
                        <div className="avaliacaoCursoNegativa">
                            <p><FontAwesomeIcon icon={faThumbsDown}/>{ informacoesCurso[0].avaliacaoNegativa}</p>
                        </div>
                    </div>
                </div>

                <div className="cursoRight">
                    <div className="linkAulasCursos">
                        {informacoesCurso[0].linkAulasCurso.map( (r) => {
                            return(
                            <div>
                                <p><Link to={'/AulaM'}><FontAwesomeIcon icon={faThumbtack}/> {r} </Link></p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
     );
}
 
export default CursoM;