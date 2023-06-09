import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import Axios from "../../services/axios";

function Personal2() {
  const [personal, setPersonal] = useState([]);
  const [carreras, setCarreras] = useState({
    clave:"",
    nombre:"",
    modalidad:""
  });

  const params = useParams();
  const navigate = useNavigate();

  const Consultar = async () => {
    const consulta = await Axios.get(`/personal/consultar/${params.id}`);
    setPersonal(consulta.data);
    console.log(consulta.data);
  };

  const consultarCarrera = async () => {
    const consultarCar = await Axios.get(`/carrera/consultarUna/${params.id}`);
    setCarreras(consultarCar.data);
    // console.log(consultarCar.data);
  };

  const Eliminar = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar")) {
      await Axios.delete(`/personal/eliminar/${id}`);
      console.log("Datos eliminados correctamente");
      toast.promise(Consultar(), {
        loading: "Eliminando usuario...",
        success: <b>Eliminando!</b>,
      });
    }
    Consultar();
  };

  useEffect(() => {
    Consultar();
    consultarCarrera();
  }, [params.id]);

  return (
    <div>
      <div className="container mt-5" align="center">
        <div className="col-md-12">
          <div className="table-responsive">
          <table class="table table-bordered">
            <thead className="thead-dark text-center">
              <th scope="col">Clave</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Sexo</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Dirección</th>
              <th scope="col">Rol</th>
              <th scope="col">Imagen</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Opciones</th>
            </thead>
            {personal.map((personal, index) => {
              return (
                <tbody>
                  <tr className="text-center">
                    <td>{personal.clave}</td>
                    <td>{personal.nombre}</td>
                    <td>{personal.apellidos}</td>
                    <td>{personal.telefono}</td>
                    <td>{personal.sexo}</td>
                    <td>{personal.fechNac}</td>
                    <td>{personal.direccion}</td>
                    <td>{personal.rol}</td>
                    <td>{personal.imagPer}</td>
                    <td>{personal.descripcion}</td>
                    <center>
                      <td>
                        <button className="btn btn-danger" onClick={() => Eliminar(personal._id)}>Eliminar</button>
                        <br />
                        <button className="btn btn-primary" onClick={()=> navigate(`/registroPersonal/${personal._id}`)}>Editar</button>
                      </td>
                    </center>
                  </tr>
                </tbody>
              );
            })}
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal2;