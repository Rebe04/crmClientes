import React, { useEffect, useState } from "react";
import Formulario from "../components/Formulario";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setCliente(result);
      } catch (error) {
        console.error(error);
      }
      setCargando(!cargando);
    };
    obtenerClientesAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar los datos del cliente
      </p>
      {cliente.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p>Cliente ID no válido</p>
      )}
    </>
  );
};

export default EditarCliente;
