import React, { useState } from "react";

import "./PacotesDeViagem.scss";

const PacotesDeViagem = () => {
    const [nomeDoLugar, setNome] = useState("");
  const [preco, setEmail] = useState("");

    return(
        <div className="PacotesDeViagem">
            <h1>Sugestões dos melhores lugares</h1>
            <div className="todosasfotos">
                <div>
                    <span className="Foto1"></span>
                    <h1>Gramado</h1>
                </div> 
                <div>
                    <span className="Foto2"></span>
                    <h1>Cantinho do paraíso - Bahia</h1>
                </div>
            </div>
                
                <div className="divisao"></div>

            <div className="todasasfotos2">
                <span className="Foto3"></span>
                <h1>Caribe</h1>
                <span className="Foto4"></span>
                <h1>Prainha do Portugues</h1>
            </div>
                
                <div className="divisao2"></div>

            <div className="todasasfotos3">
                <div className="Foto5"></div>
                <div className="Foto6"></div>
            </div>
        </div>
    )
}

export default PacotesDeViagem;