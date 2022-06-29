import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import More from './more.svg'
import VerificaMenu from '../VerificaMenu'
import Rodape from '../Rodape'
import NovoPost from './NovoPost'


const Feed = () => {
    const id = localStorage.getItem("id")
    const [ posts, setPosts ] = useState([])

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

    function deletePost(id) {

        axios.delete(`https://upload-my-api.herokuapp.com/post/delete/${id}`)

        setPosts(posts.filter(post => post._id !== id ))

    }

    const mudarBotoes = () => {
        document.getElementById('edit').classList.remove('invisivel')
        document.getElementById('delet').classList.remove('invisivel')
    }

    require('./Feed.css')
    return(
        <div>
            <VerificaMenu/>
            <NovoPost/>
            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        return(
                            <div className="card" key={key} >
                                <header>
                                    <h2>{post == 0 ? "Carregando" : post.titulo}</h2>
                                    <img src={More} />
                                </header>

                                <div className="line"></div>

                                <p>{post == 0 ? "Carregando" : post.descricao}</p>
                                <p>Autor: {post == 0 ? "Carregando" : post.nick}</p>
                                <div className="btns" >

                                {id == post.iduser ? (
                                    <div className='btns-menu'>
                                        <div className="btn-edit" id='edit'>
                                            <Link to={{ pathname: `/edit/${post._id}` }} >
                                                <button>Edit</button>
                                            </Link>
                                        </div>

                                        <div className="btn-delete" id='delet'>
                                            <button onClick={() => deletePost(post._id) } >Deletar</button>
                                        </div>

                                        <div className="btn-readmore" >
                                            <Link to={{pathname: `/lermais/${post._id}` }} >
                                                <button>Ler mais</button>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="btn-readmore" >
                                        <Link to={{pathname: `/lermais/${post._id}` }} >
                                            <button>Ler mais</button>
                                        </Link>
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