import React, { useState } from 'react';

export default function ProductoCard({ imagen, titulo, descripcion, precio }) {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const reinicio = () => setContador(0);

  const handleComprar = () => {
    if (contador > 0) {
      reinicio();
    }
  };

  return (
    <div className="card h-100 shadow-lg rounded-4" style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <img src={imagen} alt={titulo} style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '120px' }} />
      <div className="card-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h5
          className="card-title"
          style={{
            color: '#ffeb3b',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
          title={titulo}
        >
          {titulo}
        </h5>
        <p
          className="card-text"
          style={{
            color: '#ffffff',
            minHeight: '60px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
          title={descripcion}
        >
          {descripcion} <br /> Precio: {precio}
        </p>
        <a href="#" className="btn btn-primary shadow" style={{ backgroundColor: '#ffeb3b', color: '#000000', borderColor: '#ffeb3b' }}>Ver más</a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
          <button
            onClick={restar}
            style={{
              backgroundColor: '#ffeb3b',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f5d90f'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffeb3b'}
          >
            -
          </button>
          {/* Se oculta el contador entre los botones + y - */}
          {/* <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '24px', textAlign: 'center' }}>{contador}</span> */}
          <button
            onClick={sumar}
            style={{
              backgroundColor: '#ffeb3b',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f5d90f'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffeb3b'}
          >
            +
          </button>
        </div>
         <button
           onClick={reinicio}
           style={{
             backgroundColor: '#ffeb3b',
             color: '#000',
             border: 'none',
             borderRadius: '6px',
             padding: '6px 12px',
             fontWeight: 'bold',
             cursor: 'pointer',
             boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
             transition: 'background-color 0.3s ease',
             marginTop: '10px',
           }}
           onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f5d90f'}
           onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffeb3b'}
         >
           reinicio
         </button>
        <button
          className="btn btn-primary shadow mt-3"
          style={{ backgroundColor: '#007bff', color: '#ffffff', borderColor: '#007bff' }}
          disabled={contador === 0}
          onClick={handleComprar}
        >
          Comprar ({contador})
        </button>

      </div>
    </div>
  );
}
