import React from 'react';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import portada from '../assets/portada.png';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow" style={{ backgroundColor: 'rgba(5,7,0.56)', boxShadow: '0 4px 6px rgba(5, 5, 5, 0.87)' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo3} alt="Logo 3" className="navbar-brand-img" style={{ maxWidth: '50px', marginRight: '10px', boxShadow: '0 4px 8px rgba(10, 10, 10, 0.5)', borderRadius: '8px', transition: 'transform 0.3s ease' }} />
            <img src={portada} alt="Portada" className="navbar-brand-img" style={{ maxWidth: '150px', boxShadow: '0 4px 8px rgba(15, 15, 15, 0.5)', borderRadius: '8px', transition: 'transform 0.3s ease' }} />
            <img src={logo4} alt="Logo 4" className="navbar-brand-img" style={{ maxWidth: '50px', marginLeft: '10px', boxShadow: '0 4px 8px rgba(17, 17, 17, 0.5)', borderRadius: '8px', transition: 'transform 0.3s ease' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="INICIO.html" style={{ color: '#ffeb3b' }}>INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="PRODUCTOS.html" style={{ color: '#ffeb3b' }}>PRODUCTOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="CONTACTENOS.html" style={{ color: '#ffeb3b' }}>CONTACTENOS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
