import { faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";

const CursoM = () => {

    const informacoesCurso = [
        {
            nomeCurso: "Curso Web Design Completo: HTML5, CSS3 e JS",
            descricaoCurso: "Webdesign/ Front-end Fundamentos. Aprenda DE VERDADE HTML e CSS (básico ao avançado) e inicie o Javascript. 100% prático. ",
            imagem: "fa",
            avaliacaoPositiva: "152",
            avaliacaoNegativa: "26",
            linkAulasCurso: ["Introdução", 
            "Estrutura de uma página web - Parte 1 ",
             "Estrutura de uma página web - Parte 2 ", 
            "Cabeçalhos",
             "Parágrafos",
              "Listas ordenadas e não ordenadas",
               "Imagens",
                "Links",
                 "Tabelas",
                  "Formulários"
                ]
        }
    ];

    require('../Styles/CursoM.css')
    return ( 
        <div>
            <MenuAL/>
        
            <div className="cursoGeral">
                <div className="cursoLeft">
                    <div className="nomeCurso">
                        <h2>{ informacoesCurso[0].nomeCurso}</h2>
                    </div>
                    <div className="imagemCurso">
                        <img src={require("./Imagens/aulaHTML.png")}/>
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
                                <p><Link to={'/AulaM'} className="linkAulas"><FontAwesomeIcon icon={faThumbtack}/> {r} </Link></p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="descricaoCurso">
                    <h2> O que você aprenderá: </h2>
                </div>

            <Rodape/>
        </div>
     );
}
 
export default CursoM;