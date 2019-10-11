import React, { useState } from "react";

import "./PacotesDeViagem.scss";

const PacotesDeViagem = () => {
    const [nomeDoLugar, setNome] = useState("");
  const [preco, setEmail] = useState("");

    return(
        <div className="PacotesDeViagem">
            <h1>Sugestões dos melhores lugares</h1>
            <div className="todosasfotos">
                <div className="Foto1"></div>
                <div className="Foto2"></div>
            </div>
                <div className="divisao"></div>
            <div className="todasasfotos2">
                <div className="Foto3"></div>
                <div className="Foto4"></div>
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