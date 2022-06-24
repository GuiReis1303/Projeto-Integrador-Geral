import React from "react";
import MenuAL from "../Modulos/MenuAL"
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";
import MenuALogin from "../Modulos/MenuALogin"

const Historia = () => {
    const id = localStorage.getItem("id")
    require('../Styles/Faq.css')
    return ( 
        <div>
            {id == null ? <MenuALogin/> : <MenuAL/>}

            <Whats/>
            <MenuAL/>
            <h2>História</h2>
            <Rodape/>
        </div>
     );
}
 
export default Historia;