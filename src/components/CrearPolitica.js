import React, { useState } from 'react';
import axios from 'axios';

const CrearPolitica = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaPolitica = {
      nombre,
      descripcion
    };

    axios.post('http://localhost:8080/api/politicas', nuevaPolitica)
      .then(() => {
        setMensaje('Política creada exitosamente.');
        setNombre('');
        setDescripcion('');
      })
      .catch(error => {
        console.error('Error al crear política:', error);
        setMensaje('Ocurrió un error.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Crear Nueva Política</h2>
      {mensaje && <div className="alert alert-info">{mensaje}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            rows="3"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default CrearPolitica;
