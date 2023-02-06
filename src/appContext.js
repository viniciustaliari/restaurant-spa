import React, { useState } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  //Reserva-----------------------------------------------
  const [nombreReserva, setNombreReserva] = useState("");
  const [apellidosReserva, setApellidos] = useState("");
  const [personasReserva, setPersonas] = useState(0);
  const [fechaReserva, setFecha] = useState("");
  const [horaReserva, setHora] = useState("");

  const reservar = (nombre, apellidos, personas, fecha, hora) => {
    setNombreReserva(nombre);
    setApellidos(apellidos);
    setPersonas(personas);
    setFecha(fecha);
    setHora(hora);
  };
  //------------------------------------------------------
    const [idCarta, setIdCarta] = useState(0);
    const cambiarId = (id)=>{
      setIdCarta(id);
    }
  //------------------------------------------------------
  const data = {
    cambiarId,
    reservar,
    nombreReserva,
    apellidosReserva,
    personasReserva,
    fechaReserva,
    horaReserva,
    idCarta
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

function useData() {
  const data = React.useContext(AppContext);
  return data;
}

export { AppProvider, useData };
