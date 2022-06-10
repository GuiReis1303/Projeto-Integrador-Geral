import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Whats = () => {
    require('./Whats.css')
    return ( 
        <div className="fab">
            <button className="main"><FontAwesomeIcon icon={faWhatsapp} className="iconWhatsapp"/></button>
        </div>
     );
}
 
export default Whats;