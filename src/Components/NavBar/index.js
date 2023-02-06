import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [sandwich, setSandwich] = useState(false);
  const navigate = useNavigate();
  //-------------------------------------------
  const contenedorHeader1 = {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "#3C3C3C",
    alignItems: "center",
    position: "fixed",
    width: "100%",
  };
  const logo = {
    color: "white",
    fontSize: "13px",
    cursor: "pointer",
  };

  const contenedorSand = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  };

  const sandItem = {
    height: "4px",
    width: "25px",
    backgroundColor: "white",
  };

  const contenedorSandDesplegado = {
    backgroundColor: "#3C3C3C",
    padding: "10px",
    position: "fixed",
    width: "100%",
  };

  const contenedorContenedorX = {
    display: "flex",
  };

  const contenedorX = {
    marginLeft: "auto",
    marginRight: "10px",
    marginTop: "10px",
    cursor: "pointer",
  };

  const x1 = {
    height: "4px",
    width: "25px",
    backgroundColor: "white",
    transform: "rotate(45deg) translateX(2px)",
  };

  const x2 = {
    height: "4px",
    width: "25px",
    backgroundColor: "white",
    transform: "rotate(-45deg) translateX(2px)",
  };

  const menu = {
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    textDecoration: "none",
  };

  const estiloPadreMenu = {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0 20px 0",
    gap: "20px",
  };

  const clickHandler = () => {
    setSandwich(!sandwich);
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  if (sandwich === false) {
    return (
      <div style={contenedorHeader1}>
        <h2 onClick={handleLogoClick} style={logo}>
          D'Italia
        </h2>
        <div style={contenedorSand} onClick={clickHandler}>
          <div style={sandItem}></div>
          <div style={sandItem}></div>
          <div style={sandItem}></div>
        </div>
      </div>
    );
  }
  if (sandwich === true) {
    return (
      <div style={contenedorSandDesplegado}>
        <div style={contenedorContenedorX}>
          <div style={contenedorX} onClick={clickHandler}>
            <div style={x1}></div>
            <div style={x2}></div>
          </div>
        </div>
        <div style={estiloPadreMenu}>
          <NavLink to="/" style={menu}>
            Home
          </NavLink>
          <NavLink to="/reservar" style={menu}>
            Reservar
          </NavLink>
          <NavLink to="/carta" style={menu}>
            Carta
          </NavLink>
          <NavLink to="/pedir" style={menu}>
            Pedir
          </NavLink>
          <NavLink to="/contacto" style={menu}>
            Contacto
          </NavLink>
          <NavLink to="/blog" style={menu}>
            Blog
          </NavLink>
        </div>
      </div>
    );
  }
  //a vini le gusta irene
};
