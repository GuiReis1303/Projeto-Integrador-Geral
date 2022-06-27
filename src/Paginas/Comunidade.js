import React from "react";
import Whats from "../Modulos/Whats";
import Rodape from "../Modulos/Rodape";
import VerificaMenu from "../Modulos/VerificaMenu";

const Comunidade = () => {
    require('../Styles/Comunidade.css')
    return ( 
        <div>
            <VerificaMenu/>
            
            <Whats/>

            <Rodape/>
        </div>
     );
}
 
export default Comunidade;