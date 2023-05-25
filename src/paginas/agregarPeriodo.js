import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";
import Axios from "axios";

export default function AgregarPeriodo() {
  

  const datos = {
    perAct:"",
    fechInic:"",
    fechFin:""

  }

  const [startDate, setStartDate] = useState(new Date());
  const[values, setValues] = useState(datos);

  const CambioEstado = (e) =>{
    const{name,values} = e.target;
    setValues({...values, [name]: values});
    setStartDate(Date());
  }
  console.log(values)

  const save = async() =>{
    Axios.post("/periodo/guardar",{
      perAct:values.perAct,
      fechInic:values.fechInic,
      fechFin:values.fechFin
    }).then(()=>{
      console.log();
    })
  }

  const send = (e) =>{
    e.preventDefault();
    save();
  }



  return (
    <div className="container-fluid">
      <br /> <br /> <br /> <br />
      <h2 className="text-center" class="titulodocente">
        Agregar Periodos
      </h2>
      <br /> <br /> <br /> <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Periodo</th>
            <th scope="col">Fecha de inicio</th>
            <th scope="col">Fecha de finalización</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date) + CambioEstado}
                showYearPicker
                dateFormat="yyyy"
                withPortal
                name="perAct"
                value={values.perAct}
              />
            </td>
            <td>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="Limpio"
                withPortal
                name="fechInic"
                
                
              />
            </td>
            <td>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="Limpio"
                withPortal
              />
            </td>
            <td>
              <button className="btn btn-danger">Eliminar</button>
              <button className="btn btn-success">Guardar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/principal">
          <button className="btn btn-dark" id="margenBtn">
            Regresar
          </button>
        </Link>

        <button className="btn btn-primary">Ver Periodo</button>
      </div>
    </div>
  );
}
