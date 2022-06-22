import { faThumbsDown, faThumbsUp, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";

const CursoM = () => {

    const [ curso, alteraCurso] = React.useState([]);
    const [ modulo, alteraModulo] = React.useState([]);

    const axios = require('axios').default;

    React.useEffect( () => {
        axios.get('http://localhost:3001/CursoM')
        .then(function (response) {
            const dados = response.data;
            alteraCurso(dados);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get('http://localhost:3001/CursoModulos')
        .then(function (response) {
            const cmodulos = response.data;
            alteraModulo(cmodulos);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

    }, [])

    /*const informacoesCurso = [

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
    ];*/

    require('../Styles/CursoM.css')
    return ( 
        <div>
            <MenuAL/>
        
            <div className="cursoGeral">
                <div className="cursoLeft">
                    
                        <div className="nomeCurso">
                            <h2>{curso == 0 ? "Carregando" : curso[0].nome}</h2>
                        </div>
                        <div className="imagemCurso">
                            <img src={require("./Imagens/aulaHTML.png")}/>
                        </div>
                        <div className="boxCurso">
                            <p>{curso == 0 ? "Carregando" : curso[0].descricao}</p>
                        </div>
                    

                    <div className="caixaAvaliacaoCurso">
                        <div className="avaliacaoCursoPositiva">
                            <p><FontAwesomeIcon icon={faThumbsUp}/>{curso == 0 ? "Carregando" : curso[0].avaliacaoPositiva}</p>
                        </div>
                        <div className="avaliacaoCursoNegativa">
                            <p><FontAwesomeIcon icon={faThumbsDown}/>{curso == 0 ? "Carregando" : curso[0].avaliacaoNegativa}</p>
                        </div>
                    </div>
                </div>

                <div className="cursoRight">
                    <div className="linkAulasCursos">
                    {modulo == 0 ? "Carregando" : modulo.map( r => {
                            return(
                            <div className="caixaComentario">
                                <p><Link to={'/AulaM'} className="linkAulas"><FontAwesomeIcon icon={faThumbtack}/> {r.nome} </Link></p> 
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