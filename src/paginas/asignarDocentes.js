import React from "react";
import "../components/estructura.css";
import { Link } from "react-router-dom";

export default function AsignarDocentes() {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <h3 className="text-center" class="titulodocente">
        Personal
      </h3>
      <br />
      <br />
      <br />
      <center>
      <section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src="img\registropersonal.svg"/>
      <div class="card-body">
        <h5 class="card-title">Registrar personal</h5>
        <p class="card-text">Ingrese los datos del peronal que desee dar de alta.</p>
        <a href="/registroPersonal" class="btn btn-outline-success btn-sm">Ingresar</a>
      </div>
     </div>
    </div>
    
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="img\docente.svg" />
      <div class="card-body">
        <h5 class="card-title">Docente</h5>
        <p class="card-text">Visualiza e ingresa informacion de los docentes asignados.</p>
       <a href="/cargarDocente" class="btn btn-outline-success btn-sm">Ingresar</a>
      </div>
      </div>
    </div>
   

    <div class="col-lg-4 mb-4">
  <div class="card">
      <img src="img\docente-tutor.svg" />
      <div class="card-body">
        <h5 class="card-title">Docente-Tutor</h5>
        <p class="card-text">Visualiza la informacion correspondoiente a los turores docentes.</p>
       <a href="#" class="btn btn-outline-success btn-sm">Ingresar</a>
      </div>
      </div>
    </div> 

  </div>
</div>
</section>
        <br/>
      </center>
    </div>
  );
}
