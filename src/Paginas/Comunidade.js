import React from "react";
import Conexao from "../Conexao";
import MenuAL from "../Modulos/MenuAL";
import Whats from "../Modulos/Whats";

const Comunidade = () => {
    require('../Styles/Comunidade.css')
    return ( 
        <div>
            <MenuAL/>
            <Whats/>

            <h1>Pagina de Testes</h1>
            <Conexao/>
        </div>
     );
}
 
export default Comunidade;