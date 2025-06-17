import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
  });

  const [errores, setErrores] = useState({});

  const validar = (name, value) => {
    let error = '';

    if (name === 'nombre' || name === 'apellido') {
      if (!/^[A-Za-z\s]{5,30}$/.test(value)) {
        error = 'Debe tener entre 5 y 30 letras';
      }
    }

    if (name === 'telefono') {
      if (!/^\d{7,10}$/.test(value)) {
        error = 'Debe tener entre 7 y 10 dígitos numéricos';
      }
    }

    if (name === 'correo') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Correo no válido';
      }
    }

    setErrores(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    validar(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const campos = Object.keys(form);
    campos.forEach(campo => validar(campo, form[campo]));

    const hayErrores = Object.values(errores).some(error => error);
    if (!hayErrores) {
      Swal.fire({
        icon: 'success',
        title: 'Formulario enviado',
        text: 'Formulario válido y enviado correctamente',
        confirmButtonText: 'Aceptar',
        background: '#000',
        color: '#fff',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Corrige los errores antes de enviar',
        confirmButtonText: 'Aceptar',
        background: '#000',
        color: '#fff',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ejm:Diego"
          value={form.nombre}
          onChange={handleChange}
          className="form-input"
        />
        {errores.nombre && <span className="form-error">{errores.nombre}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Apellido:</label>
        <input
          type="text"
          name="apellido"
          placeholder="Ejm:Rodriguez"
          value={form.apellido}
          onChange={handleChange}
          className="form-input"
        />
        {errores.apellido && <span className="form-error">{errores.apellido}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Teléfono:</label>
        <input
          type="text"
          name="telefono"
          placeholder="Ejm:123456789"
          value={form.telefono}
          onChange={handleChange}
          className="form-input"
        />
        {errores.telefono && <span className="form-error">{errores.telefono}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Correo:</label>
        <input
          type="email"
          name="correo"
          placeholder="Ejm:juan@gmail.com"
          value={form.correo}
          onChange={handleChange}
          className="form-input"
        />
        {errores.correo && <span className="form-error">{errores.correo}</span>}
      </div>

      <button type="submit" className="btn-primary">Enviar</button>
    </form>
  );
}
