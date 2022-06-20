import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Whats = () => {
    require('./Whats.css')
    return ( 
        <div className="fab">
            <a href=""><button className="main"><FontAwesomeIcon icon={faWhatsapp} className="iconWhatsapp"/></button></a>
        </div>
     );
}
 
export default Whats;