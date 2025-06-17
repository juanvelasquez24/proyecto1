import './App.css'
import './styles/custom.css'
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Header />
      <Main />
      <Footer />
    </ProductProvider>
  )
}

export default App;
