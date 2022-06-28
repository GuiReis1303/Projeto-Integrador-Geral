import React from "react";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faHeart, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const AulaM = () => {
    const navigate = useNavigate()
    const aulaselecionada = localStorage.getItem('idaula') - 1
    
    const idaula = localStorage.getItem("idaula")
    const iduser = localStorage.getItem("id")

    const obj = {idaula: idaula}

    //INICIO DO GET E POST
    const [ aula, alteraAula] = React.useState([]);
    const [ curtida, alteraCurtida] = React.useState([]);

    const axios = require('axios').default;

    React.useEffect( () => {
        //GET PARA INFORMAÇÕES DA AULA
        axios.get('http://localhost:3001/AulaM')
        .then(function (response) {
            const dados = response.data;
            alteraAula(dados);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

        //POST PARA PEGAR CURTIDAS
        axios.post('http://localhost:3001/curtidaAula', obj)
        .then(function (response) {
            const dados = response.data;
            alteraCurtida(dados);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    //FIM DO GET E POST

    const verificarCurtida = () => {

        const axios = require('axios').default;
        
        const objVer = {idaula: idaula, iduser: iduser}

            //POST PARA VERIFICAR SE O USUARIO JA CURTIU
            axios.post('http://localhost:3001/userCurtidaAula', objVer)
            .then(function (response) {
                console.log(response);
                if (response.data == 0){
                    adicionarCurtida()
                } else {
                    alert("Você ja Curtiu essa Aula")
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const adicionarCurtida = () => {
        const objAdd = {idaula: idaula, iduser: iduser}
        axios.post('http://localhost:3001/userCurtidaAulaAdd', objAdd)
            .then(function (response) {
                console.log(response);
                if (response.status == 200){
                    navigate("/")
                    navigate("/AulaM")
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Algo de Errado Não está Certo!")
            })
    }

    require('../Styles/AulaM.css')
    return ( 
        <div>
            <MenuAL/>
            <div className="aulaGeral">
                <div className="aulaLeft">
                    <div className="iframeAula">
                        <iframe src={aula == 0 ? "Carregando" : aula[aulaselecionada].urlvideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </div>

                    <div className="aulaLeftRodape">
                        <div className="nomeAula">
                            <p>{aula == 0 ? "Carregando" : aula[aulaselecionada].nome}</p>
                        </div>

                        <div className="caixaAvaliacaoAula">
                            <div className="avaliacaoAulaPositiva">
                                <button className="botaoPositivo" onClick={() => verificarCurtida()}><FontAwesomeIcon icon={faHeart}/> {curtida == 0 ? "Carregando" : curtida[0].curtidas}</button>
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