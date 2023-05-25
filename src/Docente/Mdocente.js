import React, { Component } from "react";
import "./estructura.css";

export default function Mdocente() {
  return (
    <body class="paginaprincipal">
      <br /> <br /> <br /> <br /> 
      <center>
        <h2 class="titulodocente">Docente</h2>
      </center>
      <br /> <br/> <br/><br/>
     <center>
      <section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\gruposymaterias.svg"/>
      <div class="card-body">
        <h5 class="card-title">Grupos y Materias</h5>
        <p class="card-text">Informacion de los grupos y materias actuales asignados.</p>
        <a href="/Gruposymateriasdoc" class="btn btn-outline-success btn-sm">Ir</a>
        
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="img\asistencia.svg"/>
      <div class="card-body">
        <h5 class="card-title">Asistencia</h5>
        <p class="card-text">Tomar asistencia diaria de los grupos asignados.</p>
       <a href="/Asistencia" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\materia.svg"/>
      <div class="card-body">
        <h5 class="card-title">Materias</h5>
        <p class="card-text">Ver  materias  asignadas  al  docente docentedocente.</p>
       <a href="/cargarM" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
     </div>
    </div>
    <center>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\asignar-reportes.svg"/>
      <div class="card-body">
        <h5 class="card-title">Reportes</h5>
        <p class="card-text">Imprimir reportes.</p>
       <a href="/ReportesDocente" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
     </div>
    </div>
    </center>
  </div>
</div>
</section>
</center>
    </body>
  );
}
