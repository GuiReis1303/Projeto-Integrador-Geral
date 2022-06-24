import React from "react";
import MenuAL from "../Modulos/MenuAL";
import Whats from "../Modulos/Whats";
import Rodape from "../Modulos/Rodape";
import MenuALogin from "../Modulos/MenuALogin"

const Comunidade = () => {
    const id = localStorage.getItem("id")
    require('../Styles/Comunidade.css')
    return ( 
        <div>
            {id == null ? <MenuALogin/> : <MenuAL/>}

            <MenuAL/>
            <Whats/>

            <Rodape/>
        </div>
     );
}
 
export default Comunidade;