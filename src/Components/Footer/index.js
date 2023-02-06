import React from "react";
import "./index.css";
export const Footer = () => {
  const estiloContenedorPrincipal = {
    backgroundColor: "#3C3C3C",
    width: "100%",
    padding: "10px",
  };

  const estiloHeaderPrincipal = {
    color: "white",
    fontSize: "15px",
  };

  const estiloParrafoPrincipal = {
    fontSize: "12px",
    color: "rgba(275, 275, 275, 0.7)",
  };

  const contenedorSecundario = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  };

  const contenedorTerciario = {
    display: "flex",
    justifyItems: "flex-start",
    flexDirection: "column",
  };

  const direccion = {
    color: "white",
    fontSize: "14px",
  };

  const datosDireccion = {
    color: "rgba(275, 275, 275, 0.7)",
    fontSize: "12px",
  };

  const contenedorSocialMedias = {
    display: "flex",
    gap: "20px",
  };

  const medias = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  };

  return (
    <div style={estiloContenedorPrincipal}>
      <h3 style={estiloHeaderPrincipal}>Restaurante Italiano D'Italia</h3>
      <p style={estiloParrafoPrincipal}>
        Si eres un gran amante de la cocina italiana estás de suerte porque el
        restaurante D'Italia la elabora con los mejores productos traídos desde
        la mismísima Italia. Tiene varios restaurantes repartidos por Madrid.
      </p>
      <div style={contenedorSecundario}>
        <div style={contenedorTerciario}>
          <h5 style={direccion}>Dirección</h5>
          <p style={datosDireccion}>C/ Gran Vía - 28013, Madrid.</p>
          <p style={datosDireccion}>+34 912326402</p>
        </div>
        <div style={contenedorSocialMedias}>
          <div style={medias} className="insta"></div>
          <div style={medias} className="face"></div>
          <div style={medias} className="twitter"></div>
        </div>
      </div>
      <p style={datosDireccion}>
        © 2018-2021 D'Italia – Mozarrella Bar. Todos los derechos reservados.
      </p>
    </div>
  );
};
