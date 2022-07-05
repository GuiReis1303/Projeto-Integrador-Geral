import React from "react";
import MenuAL from "./MenuAL";
import Rodape from "./Rodape";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faHeart, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { ReactNotifications, Store } from 'react-notifications-component';
import "animate.css"
import 'react-notifications-component/dist/theme.css'

const AulaM = () => {
    const navigate = useNavigate()
    const aulaselecionada = localStorage.getItem('idaula') - 1
    
    const idaula = localStorage.getItem("idaula")
    const iduser = localStorage.getItem("id")

    const obj = {idaula: idaula}

    const sucessoAddCurtida = () =>{
        Store.addNotification({
            title: "--- Sucesso Adicionar Curtida ---",
            message: "Aula curtida com sucesso!",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
        })
    }

    const erroDeletaCurtida = () =>{
        Store.addNotification({
            title: "--- Erro Deletar Curtida ---",
            message: "Não foi possível deletar sua curtida. Tente novamente mais tarde!!",
            type: "danger",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
        })
    }

    const sucessoDeletaCurtida = () =>{
        Store.addNotification({
            title: "--- Sucesso Deletar Curtida ---",
            message: "Sua crutida foi removida com sucesso!",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
        })
    }

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
                    const iduser = localStorage.getItem('id')
                    const idaula = localStorage.getItem('idaula')
                    const objcurtida = {iduser: iduser, idaula: idaula}
                    axios.delete(`http://localhost:3001/DeletaCurtida/${objcurtida.iduser}/${objcurtida.idaula}`)
                                .then(function (response) {
                                    sucessoDeletaCurtida();
                                    setTimeout(() => {
                                        navigate('/')
                                        setTimeout(() => {
                                            navigate('/AulaM')
                                        }, 10)
                                    }, 1000);
                                })
                                .catch(function (error) {
                                    erroDeletaCurtida();
                                })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const adicionarCurtida = () => {
        const objAdd = {idaula: idaula, iduser: iduser}
        
        //POST PARA ADICIONAR CURTIDAS NA AULA
            axios.post('http://localhost:3001/userCurtidaAulaAdd', objAdd)
            
            .then(function (response) {
                console.log(response);
                if (response.status == 200){
                    sucessoAddCurtida();
                    setTimeout(() => {
                        navigate('/')
                        setTimeout(() => {
                            navigate('/AulaM')
                        }, 10)
                    }, 1000);
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
            <ReactNotifications/>
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