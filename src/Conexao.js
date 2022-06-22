import React from "react";

const Conexao = () => {

    const [ usuarios, alteraUsuarios] = React.useState([]);

    const axios = require('axios').default;

    React.useEffect( () => {
        axios.get('http://localhost:3001/')
        .then(function (response) {
            const dados = response.data;
            alteraUsuarios(dados);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
        
    require('./Styles/Comunidade.css')
    return ( 
        
        <div className="conexao">
            
            <h2>Cadastro de usuario</h2>
            <p>Último usuário cadastrado: <strong>{usuarios == 0 ? "Carregando" : usuarios[0].nick}</strong></p>
            <form className="conexao-form">
                <input placeholder="Digite seu nome..." />
                <input placeholder="Digite seu e-mail..." />
                <button>Salvar</button>
            </form>
        </div>
     );
}
 
export default Conexao;