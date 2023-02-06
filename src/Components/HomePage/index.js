import React from "react";
import { Boton } from "../Boton/index.js";
import "./index.css";

export const HomePage = () => {
  return (
    <div className="contenedor-principal">
      <section className="first-section">
        <h1>D'Italia</h1>
        <Boton
          ancho="150px"
          alto="40px"
          colorFondo="#00638D"
          titulo="Reservar"
          enlace="/reservar"
          borde="none"
          color="white"
        />
        <Boton
          ancho="150px"
          alto="40px"
          colorFondo="#00638D"
          titulo="Carta"
          enlace="/carta"
          borde="none"
          color="white"
        />
      </section>
      <section className="second-section">
        <h2>Pide a domicilio</h2>
        <p>
          Ahora puedes disfrutar de nuestros platos sin tener que salir de casa!
        </p>
        <Boton
          ancho="150px"
          alto="40px"
          colorFondo="#00638D"
          titulo="Pedir a domicilio"
          borde="none"
          color="white"
        />
      </section>
      <section className="third-section">
        <h2>Nuestra Filosofía</h2>
        <p>
          Buscamos ofrecer más que comida, queremos ofrecerte una experiencia
          gastronómica.
        </p>
        <button className="boton-blog">Nuestro blog</button>
      </section>
    </div>
  );
};
