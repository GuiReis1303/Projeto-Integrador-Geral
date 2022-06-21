import React from "react";
import MenuAL from "../Modulos/MenuAL"
import Rodape from "../Modulos/Rodape";
import Whats from "../Modulos/Whats";

const Historia = () => {
    require('../Styles/Faq.css')
    return ( 
        <div>
            <Whats/>
            <MenuAL/>
            <h2>História</h2>
            <Rodape/>
        </div>
     );
}
 
export default Historia;