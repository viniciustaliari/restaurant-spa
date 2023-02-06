import React from "react";
import { useData } from "../../appContext";
import { Boton } from "../Boton";
import {
  entrantes,
  burratas,
  ensaladas,
  pastas,
  pizzas,
  postres,
} from "../../dataCarta";

export const CartaDetallada = () => {
  const contexto = useData();

  const estiloContenedorPrincipal = {
    padding: "60px 20px 20px 20px",
    display: "flex",
    flexDirection: "column",
    minHeight: "607px",
    justifyContent: "center",
    marginBottom: "50px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const contenedorPlatos = {
    borderBottom: "2px dotted black",
    minWidth: "100%",
  };

  const estiloTexto = {
    color: "black",
    fontSize: "15px",
  };

  const contenedorBoton = {};
  return (
    <div style={estiloContenedorPrincipal}>
      <div style={contenedorBoton}>
        <Boton
          ancho="150px"
          alto="40px"
          colorFondo="#00638D"
          titulo="Volver"
          enlace="/carta"
          borde="none"
          color="white"
        />
      </div>
      {contexto.idCarta === 1
        ? entrantes.map((plato) => {
            return (
              <div key={plato.nombre} style={contenedorPlatos}>
                <h4 style={{ fontSize: "20px" }}>{plato.nombre}</h4>
                <p style={estiloTexto}>{plato.descripcion}</p>
              </div>
            );
          })
        : ""}
      {contexto.idCarta === 2
        ? burratas.map((plato) => {
            return (
              <div key={plato.nombre} style={contenedorPlatos}>
                <h4 style={{ fontSize: "20px" }}>{plato.nombre}</h4>
                <p style={estiloTexto}>{plato.descripcion}</p>
              </div>
            );
          })
        : ""}
      {contexto.idCarta === 3
        ? ensaladas.map((plato) => {
            return (
              <div key={plato.nombre} style={contenedorPlatos}>
                <h4 style={{ fontSize: "20px" }}>{plato.nombre}</h4>
                <p style={estiloTexto}>{plato.descripcion}</p>
              </div>
            );
          })
        : ""}
      {contexto.idCarta === 4
        ? pastas.map((plato) => {
            return (
              <div key={plato.nombre} style={contenedorPlatos}>
                <h4 style={{ fontSize: "20px" }}>{plato.nombre}</h4>
                <p style={estiloTexto}>{plato.descripcion}</p>
              </div>
            );
          })
        : ""}
      {contexto.idCarta === 5
        ? pizzas.map((plato) => {
            return (
              <div key={plato.nombre} style={contenedorPlatos}>
                <h4 style={{ fontSize: "20px" }}>{plato.nombre}</h4>
                <p style={estiloTexto}>{plato.descripcion}</p>
              </div>
            );
          })
        : ""}
      {contexto.idCarta === 6
        ? postres.map((plato) => {
            return (
              <div key={plato.nombre} style={contenedorPlatos}>
                <h4 style={{ fontSize: "20px" }}>{plato.nombre}</h4>
                <p style={estiloTexto}>{plato.descripcion}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
};
