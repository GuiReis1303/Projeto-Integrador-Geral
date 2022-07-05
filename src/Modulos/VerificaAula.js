import React from "react";
import AulaM from "./AulaM";
import SemPermissao from "../Paginas/SemPermissao";


const VerificaAula = () => {

    const tconta = localStorage.getItem("tconta")

    return ( 
        <div>
            {tconta != 0 ? <AulaM/> : <SemPermissao/>}
        </div>
     );
}
 
export default VerificaAula;