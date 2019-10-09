import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Prontos Turisticos</a>
        <a href="/">Preços</a>
        <a href="/">Hotéis</a>
      </section>
    </div>
  );
};
export default Navbar;
