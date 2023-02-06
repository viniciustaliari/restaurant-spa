import React from "react";
import { Boton } from "../Boton";

export const CartaMenu = () => {
  const estiloContenedor = {
    backgroundColor: "#fffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  };

  const estiloTitulo = {
    marginTop: "60px",
    fontSize: "50px",
    color: "black",
  };

  const opciones = [
    {
      nombre: "Entrantes",
      id: 1,
    },
    {
      nombre: "Burratas",
      id: 2,
    },
    {
      nombre: "Ensaladas",
      id: 3,
    },
    {
      nombre: "Pastas",
      id: 4,
    },
    {
      nombre: "Pizzas",
      id: 5,
    },
    {
      nombre: "Postres",
      id: 6,
    },
  ];

  return (
    <div style={estiloContenedor}>
      <h2 style={estiloTitulo}>Carta</h2>
      {opciones.map((plato) => {
        return (
          <Boton
            key={plato.id}
            ancho="250px"
            alto="40px"
            colorFondo="transparent"
            titulo={plato.nombre}
            borde="2px solid black"
            fuente="20px"
            id={plato.id}
            enlace="nuestraCarta"
          />
        );
      })}
      <p></p>
    </div>
  );
};
