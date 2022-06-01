import React from "react";
import Corpo from "../Modulos/Corpo";
import Rodape from "../Modulos/Rodape";

const Assinatura = () => {
    require('./Assinatura.css')
    return ( 
        <div>
            <div className="corpo">
                <div className="imagemLateral">
                    
                </div>

                <div className="meio">
                    <div className="caixa01">
                        <div>
                            <h2>Plano 01 - Prata</h2>
                        </div>

                        <div>
                            <div>
                                
                            </div>

                            <div>
                                a
                            </div>
                        </div>

                        <div>
                            a
                        </div>
                    </div>

                    <div className="caixa02">
                        <div>
                            <h2>Plano 02 - Gold</h2>
                        </div>

                        <div>
                             
                        </div>

                        <div>
                            a
                        </div>
                    </div>
                </div>

                <div className="imagemLateral">
                    
                </div>
            </div>
            <Rodape/>
        </div>
     );
}
 
export default Assinatura;