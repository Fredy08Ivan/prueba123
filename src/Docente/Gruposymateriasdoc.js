import React, { Component } from "react";
import "./estructura.css";

export default function Gruposymateriasdoc() {
    return (
        <body class="paginaprincipal "><br /><br /><br /> 
            <center><h2 class="titulodocente">Grupos y materias</h2></center>
            <br /> <br /> <br /><br/>       

            
  
<section id="gallery">
  <div class="container">
    <div class="row">
        <center>
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\grupo.svg"/>
      <div class="card-body">
        <h5 class="card-title">Grupos</h5>
        <p class="card-text">Informacion de los grupos actuales asignados.</p>
        <a href="/Vegrupos" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
     </div>
    </div>
    
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="img\materia.svg" />
      <div class="card-body">
        <h5 class="card-title">Materias</h5>
        <p class="card-text">Informacion de de las materiascargadas al docente.</p>
       <a href="/Vematerias" class="btn btn-outline-success btn-sm">Ir</a>
      </div>
      </div>
    </div>
    </center>
  </div>
</div>
</section>
        </body>
    );
}
