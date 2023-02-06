import React from "react";
import { useData } from "../../appContext";
import { Boton } from "../Boton";

export const ResumenReserva = () => {
  const data = useData();

  const estiloSection = {
    marginBottom: "70px",
  };
  const estiloDiv = {
    backgroundColor: "#868686",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const estiloTitulo = {
    marginTop: "90px",
  };

  const estiloLabel = {
    fontSize: "20px",
    fontWeight: "700",
  };
  const estiloParrafo = {
    fontSize: "17px",
  };

  return (
    <div style={estiloDiv}>
      <section style={estiloSection}>
        <h3 style={estiloTitulo}>Resumen de su reserva</h3>
        <label style={estiloLabel}>Dia</label>
        <p style={estiloParrafo}>{data.fechaReserva}</p>
        <label style={estiloLabel}>Hora</label>
        <p style={estiloParrafo}>{data.horaReserva}</p>
        <label style={estiloLabel}>Numero de personas</label>
        <p style={estiloParrafo}>{data.personasReserva}</p>
        <label style={estiloLabel}>Nombre</label>
        <p style={estiloParrafo}>
          {data.nombreReserva} {data.apellidosReserva}
        </p>
        <Boton
          ancho="150px"
          alto="40px"
          colorFondo="#00638D"
          titulo="Modificar"
          enlace="/reservar"
          borde="none"
          color='white'
        />
      </section>
    </div>
  );
};
