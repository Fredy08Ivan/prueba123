import React from "react";
import {Link} from 'react-router-dom'

export default function cargaDocente() {
  return (
    <div className="container-fluid">
      <br />
      <br /><br /><br />
      <h3 className="text-center" class="titulodocente">Carga de Docentes</h3>
      <br /><br />
      <table class="table table-dark">
        <thead>...</thead>
        <tbody>
          <tr class="table-active">...</tr>
          <tr>...</tr>
          <tr>
            <th scope="row">Clave</th>
            <td colspan="3" class="table-active">
              Nombre
            </td>
            <td colspan="3" class="table-active">
              Apellidos
            </td>
            <td>Telefono</td>
            <td>Sexo</td>
            <td>Correo</td>
            <td>Cargo</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td colspan="3" class="table-active">
              Juan
            </td>
            <td colspan="3" class="table-active">
              Pérez Leon
            </td>
            <td>919239213</td>
            <td>Masculino</td>
            <td>gatito18grr@rios.edu.mx</td>
            <td>
              <button className="btn btn-danger col-6">Tutor</button>
              <button className="btn btn-primary col-6">Docente</button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className="col-12 text-center">
        <Link className="textref" to="/asignarDoc">
        <button className="btn btn-dark">
          Regresar
        </button>
        </Link>
      </div>
    </div>
  );
}
