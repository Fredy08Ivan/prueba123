import React, { Component } from "react";
import "./estructura.css";
import { Link } from "react-router-dom";

import Footer from "../paginas/pieDePagina";

export default function Principal() {
  return (

    <body>
      <br/> 
       <center>
          <h2 class="tituloprin"><b>Bienvenido</b></h2>
        </center> <br/><br/>
    
        <center>
      <section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card"><br/>
   <center>  <img src="img\icono-personal.svg"/>
   </center>
       <div class="card-body">
        <h5 class="card-title">Personal</h5>
        <p class="card-text">Ingrese para poder asignar o visualizar el personal correspondiente.</p>
        <a href="/asignarDoc" class="btn btn-outline-success btn-sm">Asignar</a>
        
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card"><br/>
  <center><img src="img\asignar-reportes.svg" width="170" height="156"/></center>
 <div class="card-body">
        <h5 class="card-title">Asignar Periodos</h5>
        <p class="card-text">Puede asignar los periodos actuales o bien visualizar los anteriores.</p>
       <a href="/periodos" class="btn btn-outline-success btn-sm">Agregar</a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-4">
    <div class="card"><br/>
    <center><img src="img\aulas.svg"/></center>
      <div class="card-body">
        <h5 class="card-title">Agregar Aulas</h5>
        <p class="card-text">agregar las aulas correspondientes a los grupos actuales.</p>
       <a href="/agregAulas" class="btn btn-outline-success btn-sm">agregar</a>
      </div>
     </div>
    </div>
   
    <div class="col-lg-4 mb-4">
    <div class="card"><br/>
    <center><img src="img\carrera.svg"/></center>
       <div class="card-body">
        <h5 class="card-title">Carrera</h5>
        <p class="card-text">Ingrese para registrar la carrera correspondiente.</p>
       <a href="/aggCarrera" class="btn btn-outline-success btn-sm">Agregar</a>
      </div>
     </div>
    </div>

    <div class="col-lg-4 mb-4">
    <div class="card"><br/>
      <center><img src="img\materia.svg"/></center>
       <div class="card-body">
        <h5 class="card-title">Agregar Materias</h5>
        <p class="card-text">Agregar o modificar datos de las materias correspondientes.</p>
       <a href="/ReportesDocente" class="btn btn-outline-success btn-sm">Agregar</a>
      </div>
     </div>
    </div>

    <div class="col-lg-4 mb-4">
    <div class="card"><br/>
      <center><img src="img\grupo.svg"/></center>
       <div class="card-body">
        <h5 class="card-title">Agregar grupos</h5>
        <p class="card-text">Agregar los grupos correspondientes a los semestres.</p>
       <a href="/ReportesDocente" class="btn btn-outline-success btn-sm">AgregarAlumnos</a>
      </div>
     </div>
    </div>
<center>
    <div class="col-lg-4 mb-4">
    <div class="card">
     <center><img src="img\agregaralumno.svg"/></center>
      <div class="card-body">
        <h5 class="card-title">Agregar Alumnos</h5>
        <p class="card-text">Ingrese la informacion correspondiente a los alumnos.</p>
       <a href="/ReportesDocente" class="btn btn-outline-success btn-sm">Agregar</a>
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
