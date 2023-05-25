import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/estructura.css";

import Axios from "../services/axios";
import { toast } from "react-hot-toast";

export default function AgregarAulas() {
  const datos = {
    nombre: "",
    capacidad: "",
    edificio: "",
    planta: "",
  };

  const [values, setValues] = useState(datos);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };



  const save = async () => {
    Axios.post("/aula/guardar", {
      nombre: values.nombre,
      capacidad: values.capacidad,
      edificio: values.edificio,
      planta: values.planta,
    }).then(() => {
      toast.success("Successfully toasted!");
    });
    setValues(datos);
  };

  const send = (e) => {
    e.preventDefault();
    save();
  };

  return (
    <div className="container-fluid text-center">
      <br />
      <br />
      <br />
      <br />
      <h3 class="titulodocente">Ingresar datos de las Aulas</h3>
      <br />
      <br />
      <br />
      <br />

      <div id="container">
        <h1>&bull; Registro de aula &bull;</h1>
        <div class="underline"></div>
        <div class="icon_wrapper">
        <ion-icon name="business"></ion-icon>
        </div>
        <form className="row g-3 needs-validation" novalidate onSubmit={send}>
          <div class="name2">
            <label for="validationCustom01" className="form-label"></label>
            <input
              type="text"
              placeholder="Nombre"
              className="form-control"
              id="validationCustom01"
              required
              name="nombre"
              value={values.nombre}
              onChange={CambioEstado}
            />
            <div className="valid-feedback">Datos Ingresados con exito!</div>
          </div>

          <div class="telephone">
            <label for="validationCustom02" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Capacidad"
              id="validationCustom02"
              name="capacidad"
              required
              value={values.capacidad}
              onChange={CambioEstado}
            />
          </div>
          <div class="subject">
            <label for="validationCustom03" className="form-label"></label>
            <select
              id="validationCustom03"
              placeholder="Edificio"
              required
              name="edificio"
              value={values.edificio}
              onChange={CambioEstado}
            >
              <option disabled selected value="">
                Edificio
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>Industrial</option>
            </select>
          </div>

          <div class="subject">
            <label for="validationCustom03" className="form-label"></label>
            <select
              placeholder="Edificio"
              id="validationCustom04"
              required
              name="planta"
              value={values.planta}
              onChange={CambioEstado}
            >
              <option disabled selected value="">
                Planta
              </option>
              <option>Alta</option>
              <option>Baja</option>
            </select>
          </div>

          <div class="submit">
            <input type="submit" value="Guardar" id="form_button" />
          </div>
        </form>
      </div>
      <br />
      <div className="col-12 text-center">
        <Link className="txtref" to="/principal">
          <button className="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
