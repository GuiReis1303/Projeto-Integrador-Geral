import React from "react";
import Comunidade from "../Paginas/Comunidade";
import SemAcesso from "../Paginas/SemAcesso";


const VerificaComunidade = () => {

    const id = localStorage.getItem("id")

    return ( 
        <div>
            {id != null ? <Comunidade/> : <SemAcesso/>}
        </div>
     );
}
 
export default VerificaComunidade;