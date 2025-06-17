import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = () => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(response => {
          if (!response.ok) throw new Error('Error en la Api');
          return response.json();
        })
        .then(data => {
          const descripciones = [
            'Cocktail refrescante con toques cítricos',
            'Mezcla exótica y dulce ',
            'Sabor intenso y aroma único',
            'Cóctel clásico con un giro moderno',
            'Perfecto para una noche especial',
            'Delicioso y suave, ideal para cualquier ocasión',
          ];
          const precios = ['15000', '18000', '20000', '17000', '19000', '16000'];
          const productosLimitados = data.drinks.slice(0, 6).map((drink, index) => ({
            imagen: drink.strDrinkThumb,
            titulo: drink.strDrink,
            descripcion: descripciones[index] || 'Cocktail delicioso',
            precio: precios[index] || '18500',
          }));
          setProductos(productosLimitados);
          setError(null);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    };

    fetchProductos();
  }, []);

  return (
    <ProductContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
