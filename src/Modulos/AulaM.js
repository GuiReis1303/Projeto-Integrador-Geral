import React from "react";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const AulaM = () => {
    const modulo = 0
    const [ aula, alteraAula] = React.useState([]);
    const [ comment, alteraComment] = React.useState([]);

    const axios = require('axios').default;

    React.useEffect( () => {
        axios.get('http://localhost:3001/AulaM')
        .then(function (response) {
            const dados = response.data;
            alteraAula(dados);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

        axios.get('http://localhost:3001/AulaMComentarios')
        .then(function (response) {
            const comentarios = response.data;
            alteraComment(comentarios);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    /*const informacoesAula = [
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
        },
        {
            iframeAula: "https://www.youtube-nocookie.com/embed/uCyVx1vYDz8",
            nomeAula: "Introdução à CSS",
            avaliacaoPositiva: " 100",
            avaliacaoNegativa: " 3",
            comentario: [ 
                            {nick:"Guilherme", comentario:"asdasd", registro:"05/07/2003"}, 
                            {nick:"Bruna", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Marcos", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Paulo", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Conrado", comentario:"Gostei! Pena que não ensina a fazer café! :/", registro:"05/07/2003"}
                        ]
        },
        {
            iframeAula: "https://www.youtube-nocookie.com/embed/uCyVx1vYDz8",
            nomeAula: "Introdução à JavaScript",
            avaliacaoPositiva: " 200",
            avaliacaoNegativa: " 3",
            comentario: [ 
                            {nick:"Guilherme", comentario:"asdasd", registro:"05/07/2003"}, 
                            {nick:"Bruna", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Marcos", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Paulo", comentario:"asdasd", registro:"05/07/2003"},
                            {nick:"Conrado", comentario:"Gostei! Pena que não ensina a fazer café! :/", registro:"05/07/2003"}
                        ]
        },
    ]*/

    require('../Styles/AulaM.css')
    return ( 
        <div>
            <MenuAL/>

            <div className="aulaGeral">
                <div className="aulaLeft">
                    <div className="iframeAula">
                        <iframe src={aula == 0 ? "Carregando" : aula[modulo].urlvideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </div>

                    <div className="aulaLeftRodape">
                        <div className="nomeAula">
                            <p>{aula == 0 ? "Carregando" : aula[modulo].nome}</p>
                        </div>

                        <div className="caixaAvaliacaoAula">
                            <div className="avaliacaoAulaPositiva">
                                <p><FontAwesomeIcon icon={faThumbsUp}/>{aula == 0 ? "Carregando" : aula[modulo].avaliacaoPositiva}</p>
                            </div>

                            <div className="avaliacaoAulaNegativa">
                                <p><FontAwesomeIcon icon={faThumbsDown}/>{aula == 0 ? "Carregando" : aula[modulo].avaliacaoNegativa}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aulaRight">
                    <div className="comentariosAula">
                        {comment == 0 ? "Carregando" : comment.map( r => {
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

            <Rodape/>
        </div>
     );
}
 
export default AulaM;