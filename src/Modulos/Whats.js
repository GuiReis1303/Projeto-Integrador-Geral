import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';

const Whats = () => {

    require('./Whats.css')
    return ( 
        <div className="fab">
            <a href="https://www.whatsapp.com/?lang=pt_br"><button className="main"><FontAwesomeIcon icon={faWhatsapp} className="iconWhatsapp"/></button></a>
        </div>
     );
}
 
export default Whats;