import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

import { ReactNotifications, Store } from 'react-notifications-component';
import "animate.css"
import 'react-notifications-component/dist/theme.css'

const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menos de 500 caracteres")
})

const CriarPost = () => {

    const erroCriarPostagem = () =>{
        Store.addNotification({
            title: "--- Criar Postagem Erro ---",
            message: "Não foi possível enviar seu comentário, verifique se está tudo correto!",
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

    const sucessoCriarPostagem = () =>{
        Store.addNotification({
            title: "--- Criar Postagem Sucesso ---",
            message: "Seus comentário foi postado com sucesso!",
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

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const verificarDados = () => {

        const titulo = document.getElementById('titulo').value
        const descricao = document.getElementById('descricao').value
        const comentario = document.getElementById('comentario').value
        const iduser = localStorage.getItem('id')
        console.log(titulo, descricao, comentario, iduser)
        const obj = {
            titulo: titulo,
            descricao: descricao,
            comentario: comentario,
            iduser: iduser
        }
        console.log(obj)

        axios.post('http://localhost:3001/CriarPost', obj)
            .then(function (response) {
                console.log(response);
                console.log(response.status)
                if (response.status == 200){
                    sucessoCriarPostagem()
                    setTimeout(() => {
                        navigate("/Comunidade")
                    }, 1000);
                }
            })
            .catch(function (error) {
                console.log(error);
                erroCriarPostagem();
            })
    }

    require('./CriarPost.css')
    return(
        <div>
            <ReactNotifications/>
            <main>

                <div className="card-post" >

                    <h1>Criar postagem</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(verificarDados)} >

                            <div className="fields" >
                                <label>Título</label>
                                <input type="text" name="title" id='titulo' {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Descrição</label>
                                <input type="text" name="description" id='descricao' {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" id='comentario' {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit">Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default CriarPost;