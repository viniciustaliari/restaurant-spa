import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../appContext";
import "./index.css";

let contador = [];
for (let i = 2; i <= 20; i++) {
  contador.push(i);
}
let currentDate = new Date().toJSON().slice(0, 10);

export const Reservar = () => {
  const reserva = useData();
  const navigate = useNavigate();
  //-------------------------------------------
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [personas, setPersonas] = useState(0);
  const [horas, setHoras] = useState("");
  const [fecha, setFecha] = useState("");

  const handleName = (e) => {
    setNombre(e.target.value);
  };
  const handleSurname = (e) => {
    setApellido(e.target.value);
  };
  const handlePersonas = (e) => {
    setPersonas(e.target.value);
  };
  const handleHoras = (e) => {
    setHoras(e.target.value);
  };
  const handleFecha = (e) => {
    setFecha(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    reserva.reservar(nombre, apellido, personas, fecha, horas);
    navigate('/reservar/resumen');
  };

  //-------------------------------------------

  return (
    <div className="contenedor-reserva">
      <h2>Reservar en D'Italia</h2>
      <form id="reserve-form" onSubmit={handleForm}>
        <label>Personas</label>
        <select form="reserve-form" value={personas} onChange={handlePersonas}>
          <option value={1}>1 persona</option>
          {contador.map((persona) => {
            return (
              <option key={persona} value={persona}>
                {persona} Personas
              </option>
            );
          })}
        </select>
        <label>Hora</label>
        <input
          type="time"
          min="13:00"
          max="23:00"
          required
          value={horas}
          onChange={handleHoras}
        />
        <label>Fecha</label>
        <input
          type="date"
          min={currentDate}
          required
          value={fecha}
          onChange={handleFecha}
        />
        <label>Nombre</label>
        <input type="text" required value={nombre} onChange={handleName} />
        <label>Apellidos</label>
        <input type="text" required value={apellido} onChange={handleSurname} />
        <input className="botonReservar" type="submit" value="Reservar" />
      </form>
    </div>
  );
};
