import React from "react";
import Feed from "./Comunidade/Feed";
import SemAcesso from "../Paginas/SemAcesso";


const VerificaComunidade = () => {

    const id = localStorage.getItem("id")

    return ( 
        <div>
            {id != null ? <Feed/> : <SemAcesso/>}
        </div>
     );
}
 
export default VerificaComunidade;