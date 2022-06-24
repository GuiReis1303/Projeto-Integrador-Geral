import React from "react";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faHeart, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const AulaM = () => {
    const modulo = 0
    const [ aula, alteraAula] = React.useState([]);

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
    }, [])

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
                                <button className="botaoPositivo"><FontAwesomeIcon icon={faHeart}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   

            <Rodape/>
        </div>
     );
}
 
export default AulaM;