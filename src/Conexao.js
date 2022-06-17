import React from "react";

const Conexao = () => {

    const axios = require('axios').default;

    axios.get('http://localhost:3001/')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })

    return ( 
        <div>
            <h1>Cadastro de usuario</h1>
            <p>Último usuário cadastrado: <strong>?</strong></p>
            <form>
                <input placeholder="Digite seu nome" /><br/><br/>
                <input placeholder="digite seu email" /><br/><br/>
                <button>Salvar</button>
            </form>
        </div>
     );
}
 
export default Conexao;