import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./fomPr.css";

import Axios from "../services/axios";
import { toast } from "react-hot-toast";

export default function Materias() {

  const datos = {
    nomMater:"",
    clave:"",
    creditos:"",
    numTem:"",
    horaPract:"",
    horaTeoric:"",
    modalidad:"",
    semanas:"",
  };
  
  const[values, setValues] = useState(datos);

  const CambioEstado = (e) =>{
    const{name, value} = e.target;
    setValues({...values, [name]: value});
  };


  const save = async () =>{
    Axios.post("/materia/guardar",{
      nomMater : values.nomMater,
      clave : values.clave,
      creditos : values.creditos,
      numTem : values.numTem,
      horaPract : values.horaPract,
      horaTeoric : values.horaTeoric,
      modalidad : values.modalidad,
      semanas : values.semanas
    }).then(()=>{
      // Aqui va el react toastify
      toast.success('Se agrego la materia con exito')
    });
    setValues(datos);
  };

  const send = (e)=>{
    e.preventDefault();
    save();
  };

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <h3 className="text-center" class="titulodocente">
        Cargar Materias
      </h3>
      <br />
      <br />
      <br />
      <br />
      {/*Codigo de formulario*/}
      <div id="container">
        <h1>&bull; Cargar Materia &bull;</h1>
        <div class="underline"></div>
        <div class="icon_wrapper">
        <ion-icon name="easel"></ion-icon>
        </div>
        <form action="#" method="post" id="contact_form" onSubmit={send}>
          <div class="">
            <label for="name"></label>
            <input
              type="text"
              placeholder="Nombre de la materia"
              name="nomMater"
              id="name_input"
              className="form-control"
              required
              value={values.nomMater}
              onChange={CambioEstado}
            />
          </div>
          <div class="">
            <label for="name"></label>
            <input
              type="text"
              placeholder="clave"
              className="form-control"
              required
              name="clave"
              value={values.clave}
              onChange={CambioEstado}
            />
          </div>
          <div class="telephone">
            <label for="name"></label>
            <input
              type="text"
              placeholder="creditos"
              name="creditos"
              id="credits"
              className="form-control"
              required
              value={values.creditos}
              onChange={CambioEstado}
            />
          </div>

          <div className="NumTemas">
            <input
              type="text"
              placeholder="Numero de temas"
              name="numTem"
              id="numTem"
              className="form-control"
              required
              value={values.numTem}
              onChange={CambioEstado}
            />
          </div>

          <div className="HorPrac">
            <input
              type="text"
              placeholder="Horas Practicas"
              name="horaPract"
              id="horaprac"
              className="form-control"
              required
              value={values.horaPract}
              onChange={CambioEstado}
            />
          </div>

          <div className="HoraTeo">
            <input
              type="text"
              placeholder="Horas Teoricas"
              name="horaTeoric"
              className="form-control"
              id="horateo"
              required
              value={values.horaTeoric}
              onChange={CambioEstado}
            />
          </div>

          <div class="subject">
            <label for="subject">Tipo de modalidad</label>
            <select
              placeholder="Tipo de modalidad"
              name="modalidad"
              id="subject_input"
              required
              value={values.modalidad}
              onChange={CambioEstado}
            >
              <option selected disabled value="">
                Seleccione una opción...
              </option>
              <option>Escolarizada</option>
              <option>Semiescolarizada</option>
              <option>Hibrida</option>
            </select>
          </div>
          <div class="message">
            <label for="message"></label>
            <input
              type="text"
              placeholder="Numero de Semanas"
              name="semanas"
              className="form-control"
              id="numSem"
              required
              value={values.semanas}
              onChange={CambioEstado}
            />
          </div>
          <div className="submit text-center">
            <input type="submit" value="Agregar Materia" id="form_button" />
          </div>
        </form>
      </div>

      {/*Finaliza codigo de formulario*/}

      <div className="col-12 text-center">
        <Link className="" to="/principal">
          <button className="btn btn-dark">Regresar</button>
        </Link>
      </div>
    </div>
  );
}
