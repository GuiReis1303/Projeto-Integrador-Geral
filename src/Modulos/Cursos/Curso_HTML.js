import { faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuAL from "../MenuAL";
import Rodape from "../Rodape";

const Curso_HTML = () => {

    const informacoes = [
        {
            nomeCurso: "HTML - Completo",
            descricaoCurso: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
            avaliacaoPositiva: "15",
            avaliacaoNegativa: "10",
            linkAulasCurso: ["HTML Introdução", "HTML Facil", "HTML Dificil", "HTML Completo"]
        }
    ];

    require('./Curso_HTML.css')
    return ( 
        <div>
            <MenuAL/>

            <div className="cursoGeral">
                <div className="cursoLeft">
                    <div className="nomeCurso">
                        <h2>{ informacoes[0].nomeCurso}</h2>
                    </div>
                    <div className="descricaoCurso">
                        <p>{ informacoes[0].descricaoCurso}</p>
                    </div>

                    <div className="caixaAvaliacaoCurso">
                        <div className="avaliacaoPositiva">
                            <p><FontAwesomeIcon icon={faThumbsUp}/>{ informacoes[0].avaliacaoPositiva}</p>
                        </div>
                        <div className="avaliacaoNegativa">
                            <p><FontAwesomeIcon icon={faThumbsDown}/>{ informacoes[0].avaliacaoNegativa}</p>
                        </div>
                    </div>
                </div>

                <div className="cursoRight">
                    <div className="linkAulasCursos">
                        {informacoes[0].linkAulasCurso.map( (r) => {
                            return(
                            <div>
                                <p><FontAwesomeIcon icon={faThumbtack}/> {r} </p>
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
 
export default Curso_HTML;