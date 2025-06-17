import React, { useContext } from 'react';
import ProductoCard from './ProductoCard';
import Formulario from './Formulario';
import { ProductContext } from '../context/ProductContext';
import { CartProvider } from '../context/CartContext';

export default function Main() {
  const { productos, loading, error } = useContext(ProductContext);

  if (loading) {
    return <p style={{ color: '#ffeb3b' }}>Cargando productos...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <CartProvider>
      <main className="container my-4" style={{ backgroundColor: '#000000', color: '#ffffff', borderRadius: '12px', padding: '2rem' }}>
        <div className="p-5 mb-4 bg-dark rounded-3 shadow-sm d-flex flex-column align-items-center">
          <h1 className="display-5 fw-bold" style={{ color: '#ffeb3b', textAlign: 'center' }}>Bienvenido a Coctel One</h1>
          <p className="col-md-8 fs-4" style={{ color: '#ffeb3b', textAlign: 'center' }}>
            Déjate seducir por una experiencia de sabor única con nuestra exclusiva selección de cócteles. Ofrecemos bebidas artesanales elaboradas con ingredientes de alta calidad, presentadas con estilo y pensadas para cada ocasión. Desde los clásicos más emblemáticos hasta mezclas innovadoras, nuestros cócteles están diseñados para sorprender tu paladar y elevar tus momentos especiales. ¡Elige tu favorito y disfruta de la mejor coctelería, donde estés!
          </p>
          <button
            className="btn btn-primary btn-lg shadow-lg"
            type="button"
            style={{ backgroundColor: '#ffeb3b', color: '#000000', borderColor: '#ffeb3b', cursor: 'default', display: 'block', margin: '0 auto' }}
            disabled
          >
            Visita nuestra tienda
          </button>
        </div>

        <section>
          <h2 className="mb-4" style={{ color: '#ffeb3b' }}>Catálogo</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', justifyContent: 'center' }}>
            {productos.map((producto, index) => (
              <div key={index} style={{ width: '140px' }}>
                <ProductoCard
                  imagen={producto.imagen}
                  titulo={producto.titulo}
                  descripcion={producto.descripcion}
                  precio={producto.precio}
                />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#ffeb3b' }}>Formulario de Contacto</h2>
          <Formulario />
        </section>
      </main>
    </CartProvider>
  );
}
