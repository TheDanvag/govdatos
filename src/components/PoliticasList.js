import React, { useEffect, useState } from 'react';
import { obtenerPoliticas } from '../services/api';

const PoliticasList = () => {
  const [politicas, setPoliticas] = useState([]);

  useEffect(() => {
    obtenerPoliticas()
      .then(response => setPoliticas(response.data))
      .catch(error => console.error('Error al obtener políticas:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Listado de Políticas</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
          {politicas.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.descripcion}</td>
              <td>{p.fechaCreacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PoliticasList;
