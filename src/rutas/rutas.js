import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "../components/layouts/layouts";

import Principal from "../components/principal";
import Login from "../components/login";
import Materias from "../paginas/cargarmaterias";
import Reportes from "../components/reportes/generaReporte";
import Docentes from "../paginas/asignarDocentes";
import CargaDocente from "../paginas/cargaDocente";
import RegistroD from "../paginas/registroDocente";
import Mdocente from "../Docente/Mdocente.js";
import Gruposymaterias from "../Docente/Gruposymaterias";
import AgregarAlumnos from "../paginas/agregarAlumnos";
import Asistencia from "../Docente/Asistencia";
import Tutoria from "../components/reportes/infoTutoria";
import Aulas from "../paginas/agregarAulas";
import Periodo from "../paginas/agregarPeriodo";
import Gruposymateriasdoc from "../Docente/Gruposymateriasdoc";
import Vegrupos from "../Docente/Vegrupos";
import Vematerias from "../Docente/Vematerias";
import AgregaGrupo from "../paginas/agregarGrupos";
import NOTFOUND from "../paginas/notFound";

import Registrarse from "../components/registrarse";
import ReportesDocente from "../Docente/ReportesDocente";
import Vistas from "../paginas/vistaDeDatos";
import VistaPersonal from "../components/vistas_jefe/personal2";
import VistaAulas from "../components/vistas_jefe/aulas2";
import VistaMaterias from "../components/vistas_jefe/materias2";
import VistaAlumnos from "../components/vistas_jefe/alumnos2";
import VistaGrupos from "../components/vistas_jefe/grupos2";

import Contacto from "../components/contacto/contacto";

import  {AgregarCarrera}  from "../paginas/agregarCarrera";

import Carreras from "../components/vistas_jefe/carreras2";

import VistaDeCarreras from "../paginas/vistaDeCarreras";

import FormularioPrueba from "../formularioPrueba";

import VCP from "../components/vistas_jefe/vistaDeCarrera/vistaCarreraPersonal";

function Rutas() {
  return (
    <div>
      <Router>
        <Layouts />
        <Routes>
          <Route exact path="/principal" element={<Principal />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="*" element={<NOTFOUND/>} />
          <Route exact path="/cargarM" element={<Materias />} />
          <Route exact path="/generarReportes" element={<Reportes />} />
          <Route exact path="/asignarDoc" element={<Docentes />} />
          <Route exact path="/cargarDocente" element={<CargaDocente />} />
          <Route exact path="/registroPersonal" element={<RegistroD />} />
          <Route exact path="/registroPersonal/:id" element={<RegistroD />} />
          <Route exact path="/Mdocente" element={<Mdocente />} />
          <Route exact path="/Gruposymaterias" element={<Gruposymaterias />} />
          <Route exact path="/agregarAlum" element={<AgregarAlumnos/>}/>
          <Route exact path="/Asistencia" element={<Asistencia />} />
          <Route exact path="/Tutoria" element={<Tutoria/>}/>
          <Route exact path="/agregAulas" element={<Aulas/>}/>
          <Route exact path="/periodos" element={<Periodo/>}/>
          <Route exact path="/Gruposymateriasdoc" element={<Gruposymateriasdoc/>}/>
          <Route exact path="/Vegrupos" element={<Vegrupos/>}/>
          <Route exact path="/Vematerias" element={<Vematerias/>}/>
          <Route exact path="/agregaGrupo" element={<AgregaGrupo/>}/>
          <Route exact path="/ReportesDocente" element={<ReportesDocente/>}/>
          <Route exact path="/registrate"  element={<Registrarse/>}/>
          <Route exact path="/vistas" element={<Vistas/>}/>
          <Route exact path="/vistaPersonal/:id" element={<VistaPersonal/>}/>
          <Route exact path="/vistaAulas" element={<VistaAulas/>}/>
          <Route exact path="/vistaMateria" element={<VistaMaterias/>}/>
          <Route exact path="/vistaAlumnos" element={<VistaAlumnos/>}/>
          <Route exact path="/vistaGrupos" element={<VistaGrupos/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/aggCarrera" element={<AgregarCarrera/>}/>
          <Route exact path="/aggCarrera/:id" element={<AgregarCarrera/>}/>
          <Route exact path="/vistCarrera" element={<Carreras/>}/>

          <Route exact path="/prueba"  element={<FormularioPrueba/>}/>
          <Route exact path="/prueba/:id"  element={<FormularioPrueba/>}/>
          <Route exact path="/vistaCarreras"  element={<VistaDeCarreras/>}/>
          <Route exact path="/vcp" element={<VCP/>}/>

        </Routes>
      </Router>
    </div>
  );
}


export default Rutas;
