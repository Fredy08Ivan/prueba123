import React, { useState, useEffect } from "react";
import "./estructura.css";

export default function Vematerias() {
  const [materia, setMateria] = useState({});

  useEffect(() => {
    const fetchMateria = async () => {
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      setMateria(data);
    };
    fetchMateria();
  }, []);

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2 class="titulodocente">Materias actuales</h2>
      </center>
      <br />
      <br />
      <br />
      <br />

      <table class="table table-bordered border-dark tablasdoc">
        <tbody>
          <tr>
            <th scope="row">Clave:</th>
            <td class="cuerpoasistencia">{materia.clave}</td>
          </tr>
          <tr>
            <th scope="row">Materia:</th>
            <td class="cuerpoasistencia">{materia.nombre}</td>
          </tr>
          <tr>
            <th scope="row">Numero de creditos:</th>
            <td class="cuerpoasistencia">{materia.creditos}</td>
          </tr>
          <tr>
            <th scope="row">Numero de temas:</th>
            <td class="cuerpoasistencia">{materia.temas}</td>
          </tr>
          <tr>
            <th scope="row">Horas practicas:</th>
            <td class="cuerpoasistencia">{materia.horas_practicas}</td>
          </tr>
          <tr>
            <th scope="row">Horas teoricas:</th>
            <td class="cuerpoasistencia">{materia.horas_teoricas}</td>
          </tr>
          <tr>
            <th scope="row">Modalidad:</th>
            <td class="cuerpoasistencia">{materia.modalidad}</td>
          </tr>
          <tr>
            <th scope="row">Numero de semanas:</th>
            <td class="cuerpoasistencia">{materia.semanas}</td>
          </tr>
          <tr>
            <th scope="row">Carrera:</th>
            <td class="cuerpoasistencia">{materia.carrera}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
}
