import React from "react";
import MenuAL from "../Modulos/MenuAL";
import Whats from "../Modulos/Whats";
import Rodape from "../Modulos/Rodape";

const Comunidade = () => {

    require('../Styles/Comunidade.css')
    return ( 
        <div>
            <MenuAL/>
            <Whats/>

            <Rodape/>
        </div>
     );
}
 
export default Comunidade;