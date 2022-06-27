import React from "react";
import MenuAL from "./MenuAL";
import MenuALogin from "./MenuALogin";


const VerificaMenu = () => {

    const id = localStorage.getItem("id")

    return ( 
        <div>
            {id != null ? <MenuAL/> : <MenuALogin/>}
        </div>
     );
}
 
export default VerificaMenu;