import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import More from './more.svg'
import VerificaMenu from '../VerificaMenu'
import Rodape from '../Rodape'
import NovoPost from './NovoPost'

import { ReactNotifications, Store } from 'react-notifications-component';
import "animate.css"
import 'react-notifications-component/dist/theme.css'

const Feed = () => {

    const id = localStorage.getItem("id")
    const [ posts, setPosts ] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/Comunidade')
            .then(function (response) {
                console.log(response);
                const dados = response.data;
                setPosts(dados);
            })
            .catch(function (error) {
                console.log(error);
                console.log("Algo de Errado Não está Certo")
        })

    }, [])

    const erroDeletaPost = () =>{
        Store.addNotification({
            title: "--- Erro Deletar Post ---",
            message: "Não conseguimos deletar o post no momento. Tente novamente mais tarde!",
            type: "danger",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }

    const sucessoDeletaPost = () =>{
        Store.addNotification({
            title: "--- Sucesso Deletar Post ---",
            message: "Seu post foi deletado com sucesso!",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }
    
    require('./Feed.css')
    return(
        <div>
            <VerificaMenu/>
            <NovoPost/>
            <ReactNotifications/>
            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        const deletaPost = (idcomunidade) =>{
                            const obj = {idcomunidade}
                            console.log(obj.idcomunidade)

                            axios.delete(`http://localhost:3001/DeletaPost/${obj.idcomunidade}`)
                                .then(function (response) {
                                    sucessoDeletaPost();
                                    setTimeout(() => {
                                        navigate('/')
                                        setTimeout(() => {
                                            navigate('/Comunidade')
                                        }, 10)
                                    }, 1000);
                                    console.log("Removido com Sucesso")
                                })
                                .catch(function (error) {
                                    erroDeletaPost();
                                })
                        }

                        const verMaisU = () => {
                            const desc = 'descricao'+post.idcomunidade;
                            const coment = 'comentario'+post.idcomunidade;
                            const mais = 'vermaisu'+post.idcomunidade;
                            const menos = 'vermenosu'+post.idcomunidade;
                            document.getElementById(desc).classList.add('invisivel')
                            document.getElementById(coment).classList.remove('invisivel')
                            document.getElementById(mais).classList.add('invisivel')
                            document.getElementById(menos).classList.remove('invisivel')
                        }

                        const verMenosU = () => {
                            const desc = 'descricao'+post.idcomunidade;
                            const coment = 'comentario'+post.idcomunidade;
                            const mais = 'vermaisu'+post.idcomunidade;
                            const menos = 'vermenosu'+post.idcomunidade;
                            document.getElementById(desc).classList.remove('invisivel')
                            document.getElementById(coment).classList.add('invisivel')
                            document.getElementById(mais).classList.remove('invisivel')
                            document.getElementById(menos).classList.add('invisivel')
                        }

                        const verMais = () => {
                            const desc = 'descricao'+post.idcomunidade;
                            const coment = 'comentario'+post.idcomunidade;
                            const mais = 'vermais'+post.idcomunidade;
                            const menos = 'vermenos'+post.idcomunidade;
                            document.getElementById(desc).classList.add('invisivel')
                            document.getElementById(coment).classList.remove('invisivel')
                            document.getElementById(mais).classList.add('invisivel')
                            document.getElementById(menos).classList.remove('invisivel')
                        }

                        const verMenos = () => {
                            const desc = 'descricao'+post.idcomunidade;
                            const coment = 'comentario'+post.idcomunidade;
                            const mais = 'vermais'+post.idcomunidade;
                            const menos = 'vermenos'+post.idcomunidade;
                            document.getElementById(desc).classList.remove('invisivel')
                            document.getElementById(coment).classList.add('invisivel')
                            document.getElementById(mais).classList.remove('invisivel')
                            document.getElementById(menos).classList.add('invisivel')
                        }

                        return(
                            <div className="card" key={key} id={'card'+post.idcomunidade} >
                                <header>
                                    <h2>{post == 0 ? "Carregando" : post.titulo}</h2>
                                    <img src={More} />
                                </header>

                                <div className="line"></div>

                                <p className='' id={'descricao'+post.idcomunidade}>{post == 0 ? "Carregando" : post.descricao}</p>
                                <p className='invisivel' id={'comentario'+post.idcomunidade}>{post == 0 ? "Carregando" : post.comentario}</p>
                                <p>Autor: {post == 0 ? "Carregando" : post.nick}</p>
                                <div className="btns" >

                                {id == post.iduser ? (
                                    <div className='btns-menu'>
                                        <div className="btn-delete" id='delet'>
                                            <button onClick={() => deletaPost(post.idcomunidade)}>Deletar</button>
                                        </div>

                                        <div className="btn-readmore" id={'vermaisu'+post.idcomunidade}>
                                            <button onClick={() => verMaisU()}>Ver mais</button>
                                        </div>
                                        <div className="btn-readmore invisivel" id={'vermenosu'+post.idcomunidade}>
                                            <button onClick={() => verMenosU()}>Ver menos</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="btn-readmore" >
                                        <div className="btn-readmore" id={'vermais'+post.idcomunidade}>
                                            <button onClick={() => verMais()}>Ver mais</button>
                                        </div>
                                        <div className="btn-readmore invisivel" id={'vermenos'+post.idcomunidade}>
                                            <button onClick={() => verMenos()}>Ver menos</button>
                                        </div>
                                    </div>
                                )}
                                    

                                </div>
                            </div>
                        )

                    })}

                    
                </div>

            </main>
            <Rodape/>
        </div>
    )
}

export default Feed;