import React from "react";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const AulaM = () => {

    const informacoesAula = [
        {
            iframeAula: "https://www.youtube-nocookie.com/embed/uCyVx1vYDz8",
            nomeAula: "Introdução à HTML",
            avaliacaoPositiva: " 36",
            avaliacaoNegativa: " 3",
            comentario: [ 
                            {nick:"Guilherme", comentario:"asdasd", registro:"05/07/2003"}, 
                            {nick:"Bruna", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Marcos", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Paulo", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Conrado", comentario:"Gostei! Pena que não ensina a fazer café! :/", registro:"05/07/2003"}
                        ]
        }
    ]

    require('../Styles/AulaM.css')
    return ( 
        <div>
            <MenuAL/>

            <div className="aulaGeral">
                <div className="aulaLeft">
                    <div className="iframeAula">
                        <iframe src={informacoesAula[0].iframeAula} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </div>

                    <div className="aulaLeftRodape">
                        <div className="nomeAula">
                            <p>{informacoesAula[0].nomeAula}</p>
                        </div>

                        <div className="caixaAvaliacaoAula">
                            <div className="avaliacaoAulaPositiva">
                                <p><FontAwesomeIcon icon={faThumbsUp}/>{informacoesAula[0].avaliacaoPositiva}</p>
                            </div>

                            <div className="avaliacaoAulaNegativa">
                                <p><FontAwesomeIcon icon={faThumbsDown}/>{informacoesAula[0].avaliacaoNegativa}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aulaRight">
                    <div className="comentariosAula">
                        {informacoesAula[0].comentario.map( (r) => {
                            return(
                            <div className="caixaComentario">
                                <div className="caixaComentarioMenor">
                                    <p className="comentarioNick"><FontAwesomeIcon icon={faCommentAlt}/> {r.nick}</p>
                                    <p className="comentario">{r.comentario}</p>
                                    <p className="comentarioData">{r.registro}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>         
            </div>
                
                <div className="descricaoAula">
                            <h2> Material da Aula </h2>
                        </div>       

            <Rodape/>
        </div>
     );
}
 
export default AulaM;