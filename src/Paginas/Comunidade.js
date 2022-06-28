import React from "react";
import Whats from "../Modulos/Whats";
import Rodape from "../Modulos/Rodape";
import VerificaMenu from "../Modulos/VerificaMenu";

import { ReactNotifications, Store } from 'react-notifications-component';

import "animate.css"
import 'react-notifications-component/dist/theme.css'


const Comunidade = () => {
    require('../Styles/Comunidade.css')

    const botaoMensagem = () =>{
        Store.addNotification({
            title: "Aviso Importante!",
            message: "oiii",
            type: "warning",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 600
        })
    }

    return ( 
        <div>
            <VerificaMenu/>
            <ReactNotifications/>
            
            <button onClick={botaoMensagem}>Oiiiii</button>

            <Whats/>

            <Rodape/>
        </div>
     );
}
 
export default Comunidade;