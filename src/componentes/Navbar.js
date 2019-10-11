import React, { useState } from "react";
import { Link } from 'react-router-dom'

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };
  const FecharMenu = () =>{
    setMenuAtivo(false)
}
  return (
    <div className="Navbar">
      <nav>
      <div className="desktop">
        <Link onClick={FecharMenu} to='/'> Home</Link>
        <Link onClick={FecharMenu} to="/PacotesDeViagem"> Pacotes De Viagem</Link>
        <Link onClick={FecharMenu} to="/PontosTuristicos">Pontos Turisticos</Link>
      
      </div>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
          <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
          <span className={`${menuAtivo ? "virarX2" : ""}`}></span>

        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/PacotesDeViagem">Pacotes de viagem</Link>
        <Link to="/PontosTuristicos">Prontos Turisticos</Link>
      </section>
    </div>
  );
};
export default Navbar;
