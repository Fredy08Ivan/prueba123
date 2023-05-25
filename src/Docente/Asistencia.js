import React, { useState, useEffect } from "react";
import "./estructura.css";
import toast, { Toaster } from "react-hot-toast";

export default function Asistencia() {
  const [docente, setDocente] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [grupo, setGrupo] = useState("");
  const [alumnos, setAlumnos] = useState([]);

  const notify = () => toast.success("Comentario agregado");
  const guardar = () => toast.success("Asistencia guardada");

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setDocente(data.docente);
        setAsignatura(data.asignatura);
        setCarrera(data.carrera);
        setSemestre(data.semestre);
        setGrupo(data.grupo);
        setAlumnos(data.alumnos);
      });
  }, []);

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  console.log(`${month}/${day}/${year}`);
  console.log(`${month}/${day}/${year}`);

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2 class="titulodocente">Asistencia</h2>
      </center>
      <br />
      <br /> <br />
      <br />

      <table class="table table-bordered border-dark">
        <tbody>
          <tr>
            <th scope="row">Docente:</th>
            <td class="cuerpoasistencia">{docente}</td>
          </tr>
          <tr>
            <th scope="row">Asignatura:</th>
            <td class="cuerpoasistencia">{asignatura}</td>
          </tr>
          <tr>
            <th scope="row">Carrera:</th>
            <td class="cuerpoasistencia">{carrera}</td>
          </tr>
          <tr>
            <th scope="row">Semestre:</th>
            <td class="cuerpoasistencia">{semestre}</td>
          </tr>
          <tr>
            <th scope="row">Grupo:</th>
            <td class="cuerpoasistencia">{grupo}</td>
          </tr>
          <tr>
            <th scope="row">Fecha:</th>
            <td class="cuerpoasistencia">
              {day}/{month}/{year}
            </td>
          </tr>
        </tbody>
      </table><br /> <br />

            <table class="table table-bordered table-dark" WIDTH="500">
                <thead>
                    <tr>
                        <th scope="col" WIDTH="60" HEIGHT="50"><center>No.</center></th>
                        <th scope="col" WIDTH="200" HEIGHT="50"><center>Matricula</center></th>
                        <th scope="col" WIDTH="350" HEIGHT="50"><center>Nombre</center></th>
                        <th scope="col" WIDTH="100" HEIGHT="50"><center>Asistencia</center></th>
                        <th scope="col" WIDTH="100" HEIGHT="50"><center>Comentarios</center></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td ><center>1</center></td>
                        <td >19E20359</td>
                        <td >Andy Jesus Castro Reys </td>
                        <td ><center><input type="checkbox" id="cbox1" value="first_checkbox" ></input></center></td>
                        <td ><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Agregar comentario</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title fs-5" className="titulocomentarios" id="exampleModalLabel">Agregar comentario</h4>
                                            <center> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></center>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="recipient-name" className="titulocomentarios" >Motivo:</label>
                                                    <input type="text" class="form-control" id="recipient-name" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="message-text" className="titulocomentarios" >Comentario:</label>
                                                    <textarea class="form-control" id="message-text"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={notify}>Agregar</button>
                                        </div>
  





                                        
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td ></td>
                        <td></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                </tbody>
            </table>
            <br /> <br /> <br />
            <center><button type="button" class="btn btn-success" onClick={guardar}>Guardar Asistencia</button></center>  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
        </div>




    ); 
}
